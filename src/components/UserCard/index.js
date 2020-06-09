import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Renders a card with details about users.
 * @prop {Object} user
*/
class UserCard extends Component {
  render() {
    return <>
      <h2 role='card'>
        {this.props.user.name.first} {this.props.user.name.last}
      </h2>
      <br/>
    </>;
  }
}

export default UserCard;

UserCard.propTypes = {
  user: PropTypes.object,
};
