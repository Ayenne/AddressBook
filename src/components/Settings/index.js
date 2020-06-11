import React, {Component} from 'react';
import Navigation from '../Navigation';
import {nationalities} from '../../constants';
import {CHANGE_NAT} from '../../store/actionTypes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {store} from '../../store';
import PropTypes from 'prop-types';

import './style.scss';

/**
 * Renders settings options for choosing the nationality of users on UserPage.
*/
class Settings extends Component {
  constructor(props) {
    super(props);
  }

  changeNat(nat) {
    store.dispatch({type: CHANGE_NAT, payload: nat});
  }

  isActive(nat) {
    return this.props.nationality === nat ? 'active' : '';
  }

  render() {
    return <>
      <Navigation />
      <div className="settings">
        <p>Choose nationality: </p>
        <div className='buttons'>
          {Object.values(nationalities).map((nationality) =>
            <button className = {this.isActive(nationality)}
              key={nationality} onClick={() => this.changeNat(nationality)}>
              {nationality.toUpperCase()}
            </button>,
          )}
        </div>
        <Link className='back' to='/'>Back to Address Book</Link>
      </div>
    </>;
  }
}

const mapStateToProps = (state) => {
  return {
    nationality: state.nationality,
  };
};

export default connect(mapStateToProps)(Settings);

Settings.propTypes = {
  nationality: PropTypes.string,
};
