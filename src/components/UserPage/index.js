import React, {Component} from 'react';
import baseUrl from '../../constants';
import UserList from '../UserList';

/**
 * Component responsible for rendering the page listing users.
*/
class UserPage extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch(baseUrl + '?seed=abc&results=50&inc=picture,name,nat,location,email,cell,phone,login', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((results) => {
            this.setState({users: this.state.users.concat(results.results)});
        });
    }

    render() {
        return this.state.users.length > 0 ? <UserList users={this.state.users}/> : null;
    }
}

export default UserPage;