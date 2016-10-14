import React,{ Component } from 'react';
import { Link } from 'react-router'

export default class Header extends Component {

  render() {

    return (
      <div>
            <Link to="/"        className="btn-secondary">Home</Link>
            <Link to="/about"   className="btn-secondary">About</Link>
            <Link to="/contact" className="btn-secondary">Contact</Link>
            <Link to="/items"   className="btn-secondary">Items</Link>
      </div>
    );
  }
}
