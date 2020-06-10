import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchBarIcon from '../../assets/search_icon.svg';

import './style.scss';

/**
 * Component responsible for rendering a search bar and triggering
 * a callback on each change.
*/
class Search extends Component {
  render() {
    return <>
      <div className="search-bar">
        <img src={SearchBarIcon}></img>
        <input type="text" placeholder="Search..."
          onChange={(e) => this.props.handleChange(e.target.value)}
        />
      </div>
    </>;
  }
}

export default Search;

Search.propTypes = {
  handleChange: PropTypes.func,
};
