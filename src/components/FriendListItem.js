import React, { Component, PropTypes } from 'react';

export default class FriendListItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
  }

  render() {
    const { id, name, starred, starFriend, deleteFriend } = this.props;

    return (
      <li>
        <button onClick={() => {starFriend(id)}}>{! starred ? 'Star' : 'Unstar'}</button>
        <span>{this.props.name}</span>
        <span>{starred ? '**' : ''}</span>
        <button onClick={() => {deleteFriend(id)}}>Delete</button>
      </li>
    );
  }
}
