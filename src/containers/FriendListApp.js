import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as FriendsActions from '../actions/FriendsActions';
import { AddFriendInput, FriendList } from '../components';

export class FriendListApp extends Component {
  static propTypes = {
    friendlist: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  render() {
    const { friendlist: { friendsById }, dispatch} = this.props;
    const actions = bindActionCreators(FriendsActions, dispatch);

    return (
      <div>
        <h1>The FriendList</h1>
        <FriendList friends={friendsById} actions={actions} />
        <AddFriendInput addFriend={actions.addFriend} />
      </div>
    );
  }
}

export default connect(state => ({
  friendlist: state.friendlist
}))(FriendListApp);
