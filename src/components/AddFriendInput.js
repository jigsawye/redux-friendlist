import React, { Component, findDOMNode, PropTypes } from 'react';

export default class AddFriendInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    if (text !== '') {
      this.props.addFriend(text);
      node.value = '';
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          ref="input"
          autoFocus="true"
          placeholder="Type the name of a friend"
        />
        <button onClick={::this.handleClick}>
          Add
        </button>
      </div>
    );
  }
}
