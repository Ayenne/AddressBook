import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

class Navigation extends Component {
  render() {
    return <>
      <div className='navigation-bar'>
        <h1>Adress Book</h1>
        <div className='settings'>
          <Link className='link-nav' to='/settings/'>Settings</Link>
        </div>
      </div>
    </>;
  }
}

export default Navigation;
