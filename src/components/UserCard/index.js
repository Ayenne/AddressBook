import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import './style.scss';

/**
 * Renders a card with details about users.
 * @prop {Object} user
*/
class UserCardDetails extends Component {
  render() {
    return <>
      <div className="user-card-details" role='card'>
        <img src={this.props.user.picture.thumbnail}></img>
        <div className="details">
          <h2>{this.props.user.name.first} {this.props.user.name.last}</h2>
          <p>{this.props.user.login.username}</p>
          <p>{this.props.user.email}</p>
        </div>
      </div>
    </>;
  }
}

/**
 * Renders content for the popup with user details.
 * @prop {Object} user
*/
class UserCardPopup extends Component {
  render() {
    const user = this.props.user;
    return <>
      <div role='modal' className='card-popup'>
        <img className="photo-popup"
          src={user.picture.thumbnail}>
        </img>
        <div className="details">
          <h2>{user.name.first} {user.name.last}</h2>
          <p>{user.login.username}</p>
          <p>{user.email}</p>
          <p>
            {user.location.street.name} {user.location.street.number}
          </p>
          <p>
            {user.location.postcode} {user.location.city}
          </p>
          <p>{user.location.state}</p>
          <p>phone: {user.phone} mobile: {user.cell}</p>
        </div>
      </div>
    </>;
  }
}

/**
 * Renders a card with details about users and popup functionality.
 * @prop {Object} user
*/
class UserCard extends Component {
  render() {
    return <>
      <Popup trigger={
        <div>
          <UserCardDetails user={this.props.user} />
        </div>
      } modal closeOnDocumentClick
      >
        <UserCardPopup user={this.props.user}/>
      </Popup>
    </>;
  }
}

export default UserCard;

const userShape = PropTypes.shape({
  name: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
  }),
  location: PropTypes.shape({
    street: PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.number,
    }),
    postcode: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    state: PropTypes.string,
  }),
  picture: PropTypes.shape({
    thumbnail: PropTypes.string,
  }),
  login: PropTypes.shape({
    username: PropTypes.string,
  }),
});

UserCard.propTypes = {
  user: userShape,
};
UserCardPopup.propTypes = {
  user: userShape,
};
UserCardDetails.propTypes = {
  user: userShape,
};
