import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * Renders a card with details about users.
 * @prop {Object} user
*/
class UserCard extends Component {
  render() {
    return <>
      <div className="user-card" role='card'>
        <img src={this.props.user.picture.thumbnail}></img>
        <div className="details">
          <h2>{this.props.user.name.first} {this.props.user.name.last}</h2>
          <h3>{this.props.user.login.username}</h3>
          <h3>{this.props.user.email}</h3>
        </div>
      </div>
    </>;
  }
}

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.object,
};
