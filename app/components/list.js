/*jshint esversion: 6 */
/* jshint -W138 */

import React from 'react';
import { connect } from 'react-redux';

import * as ItemsActions from '../actions/items-actions';
import ListEl from '../containers/list-el';

const mapStateToProps = (
  state,
  ownProps
) => {
  return {
    items: state.discountItems,
    visibilityFilter: state.visibilityFilter,
    loading: state.loading
  };
};

class List extends React.Component  {
  getListData() {
    let { items, visibilityFilter, dispatch } = this.props,
      self = this;

    dispatch(ItemsActions.setLoadingState(true));
    self.stopCheckingScrollPosition();
    ItemsActions
      .get(items.length, visibilityFilter)
      .then(function(data){
        dispatch(data);
        dispatch(ItemsActions.setLoadingState(false));
        self.startCheckingScrollPosition();
      });
  }
  startCheckingScrollPosition(cb) {
    let self = this;
    
    // start checking for the scroll position
    this.checkInterval = setInterval(function(){
      if (document.body.scrollHeight <= (document.documentElement.clientHeight + document.body.scrollTop + 200)) {
        self.getListData();
        self.stopCheckingScrollPosition();
      }
    }, 500);
  }
  stopCheckingScrollPosition() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
  }
  componentDidMount() {
    this.getListData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.visibilityFilter !== prevProps.visibilityFilter) {
      let { dispatch } = this.props;
      dispatch(ItemsActions.clean());

      this.getListData();
    }
  }
  render() {
    let { items, loading } = this.props;

    return (
      <div>
        <ul className="items">
          {items.map((item, index) => {
            return <li style={{fontSize:item.size}} key={index}>
              <ListEl text={item.face} price={item.price}/>
              </li>;
          })}
        </ul>
        <div className="loading-footer" style={{display:(loading)? 'block' : 'none'}}><h2>Loading...</h2></div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(List);
