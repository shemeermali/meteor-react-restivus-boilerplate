import React, { Component, PropTypes } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

// Task component - represents a single todo item
export default class Item extends Component {
  render() {
    return (
      <li><Link to={`/item/${this.props.item._id}`}>{this.props.item.name}</Link></li>
    );
  }
}

Item.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  item: PropTypes.object.isRequired,
};
