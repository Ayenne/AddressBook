import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './style.scss';

class Navigation extends Component {
  render() {
    return <>
      <div className='navigation-bar'>
        <Link className='link-address' to='/'>Adress Book</Link>
        <div className='settings'>
          <Link className='link-settings' to='/settings/'>Settings</Link>
        </div>
      </div>
    </>;
  }
}

export default Navigation;
