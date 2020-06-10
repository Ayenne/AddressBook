import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {baseUrl} from '../../constants';
import Search from '../Search';
import UserList from '../UserList';
import Navigation from '../Navigation';
import applySearch from './helpers';
import {connect} from "react-redux";
import './style.scss';

/**
 * Component responsible for rendering the page listing users.
*/
class UserPage extends Component {
    state = {
        users: [],
        query: '',
    }
    hasMore = () => {
        return this.state.users.length < 1000;
    }

    loadFunc = (page) => {
        const nat = this.props.nationality;
        fetch(baseUrl + `?page=` + page + `&seed=abc&results=50&inc=picture,name,nat,location,email,cell,phone,login&nat=${nat}`, {
            method: 'GET',
        })
        .then((response) => response.json())
        .then((results) => {
            this.setState({users: this.state.users.concat(results.results)});
        });
    }

    changeQuery = (text) => {
        this.setState({query: text})
    }

    render() {
        const filteredUsers = applySearch(this.state.users, this.state.query);
        return <>
            <Navigation />
            <Search handleChange={this.changeQuery} />
            <InfiniteScroll
                pageStart={1}
                loadMore={this.loadFunc}
                hasMore={this.hasMore()}
                threshold={0}
                loader={
                    <div className='loader-wrapper'>
                        <div className="loader" key={0}></div>
                        <div className='loader-text'>Loading...</div>
                    </div>}
            >
                {this.state.users.length > 0 ? <UserList users={filteredUsers}/> : ''}
            </InfiniteScroll>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        nationality: state.nationality,
    };
};

export default connect(mapStateToProps)(UserPage);
