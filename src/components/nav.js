import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { domainToASCII } from 'url';
class Nav extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><Link to='/'>ToDo List</Link></li>
          <li><Link to='/new'>Create ToDo</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;