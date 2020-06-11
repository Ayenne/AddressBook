import React, {Component} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {baseUrl} from '../../constants';
import Search from '../Search';
import UserList from '../UserList';
import Navigation from '../Navigation';
import applySearch from './helpers';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

/**
 * Component responsible for rendering the page listing users.
*/
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      query: '',
    };
    this.maxUsers = 1000;
  }

  hasMore() {
    return this.state.users.length < this.maxUsers && this.state.query === '';
  }

  loadFunc(page) {
    let url = baseUrl;
    url += '?page=' + page;
    url += '&nat=' + this.props.nationality;
    url += '&seed=abc&results=50';
    url += '&inc=picture,name,nat,location,email,cell,phone,login';
    fetch(url, {method: 'GET'})
        .then((response) => response.json())
        .then((results) => {
          this.setState({users: this.state.users.concat(results.results)});
        });
  }

  changeQuery(text) {
    this.setState({query: text});
  }

  endMessage() {
    if (this.state.users.length >= this.maxUsers) {
      return <div className="end-catalog">End of users catalog</div>;
    } else if (this.state.query !== '') {
      return <div className="end-catalog">
        Loading is stopped while the search is active.
      </div>;
    }
    return null;
  }

  render() {
    const filteredUsers = applySearch(this.state.users, this.state.query);
    return <>
      <Navigation />
      <Search handleChange={this.changeQuery.bind(this)} />
      <div className='current-nat'>
        <Link className='nat-text' to='/settings/'>
          Browsing nationality of users: {this.props.nationality.toUpperCase()}
        </Link>
      </div>
      <InfiniteScroll
        pageStart={1}
        loadMore={this.loadFunc.bind(this)}
        hasMore={this.hasMore()}
        loader={
          <div className='loader-wrapper' key={0}>
            <div className="loader"></div>
            <div className='loader-text'>Loading...</div>
          </div>}
      >
        {this.state.users.length > 0 ? <UserList users={filteredUsers}/> : ''}
      </InfiniteScroll>
      {this.endMessage()}
    </>;
  }
}

const mapStateToProps = (state) => {
  return {
    nationality: state.nationality,
  };
};

export default connect(mapStateToProps)(UserPage);

UserPage.propTypes = {
  nationality: PropTypes.string,
};
