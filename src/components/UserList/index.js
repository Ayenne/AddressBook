import React, {Component} from 'react';
import UserCard from '../UserCard';
import PropTypes from 'prop-types';

/**
 * Renders list of users.
 * @prop {Array} users
*/
class UserList extends Component {
  render() {
    return <>
      <div role='user-list'>
        {this.props.users.map((user, i) => {
          return <UserCard key={i} user={user}/>;
        })}
      </div>
    </>;
  }
}

export default UserList;

UserList.propTypes = {
  users: PropTypes.array,
};
