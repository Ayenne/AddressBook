import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import baseUrl from '../../constants';
import UserList from '../UserList';

/**
 * Component responsible for rendering the page listing users.
*/
class UserPage extends Component {
    state = {
        users: []
    }

    hasMore = () => {
        return this.state.users.length < 1000;
    }

    loadFunc = (page) => {
        fetch(baseUrl + '?page=' + page + '&seed=abc&results=50&inc=picture,name,nat,location,email,cell,phone,login', {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((results) => {
            this.setState({users: this.state.users.concat(results.results)});
        });
    }

    render() {
        return <>
            <InfiniteScroll
                pageStart={1}
                loadMore={this.loadFunc}
                hasMore={this.hasMore()}
                loader={<div className="loader" key={0}>Loading...</div>}
            >
                {this.state.users.length > 0 ? <UserList users={this.state.users}/> : ''}
            </InfiniteScroll>
        </>
    }
}

export default UserPage;