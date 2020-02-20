import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/css/styles.css'
import getSearchedItemsAction from '../../actions/getSearchedItemsAction';
import ProductsComponent from './products';

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searching: false,
    };
  }

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    this.setState({
      searching: true
    });
    e.preventDefault();
    const { search } = this.state;
    const searchInfo = {
      search,
    };
    const { searchAction } = this.props;

    if (this.validateSearchEntry(search)) {
      return;
    }

    searchAction(searchInfo);

    this.handleClearForm();
  }


  validateSearchEntry(search) {
    if (search === '') {
      return true;
    }
    return false;
  }

  handleClearForm() {
    this.setState({
      search: '',
    });
  }


  render() {
    const { search, searching } = this.state;
    const { products } = this.props;
    return (
      <div className="full-width">
        <div className="content-container">
          <div className="search-box-container">
            <form onSubmit={this.handleSubmit}>
              <input
                autoFocus
                className="search-box"
                type="search"
                id="search"
                name="search"
                value={search}
                onChange={this.onInputChange}
                placeholder="Search"
              />
            </form> <br />
            {
              searching ? <ProductsComponent products={products} /> : ''
            }
          </div>
        </div>
      </div>
    )
  }
}


SearchComponent.propTypes = {
  searchAction: PropTypes.func.isRequired,
};


export const mapStateToProps = (state) => {
  const { products } = state.getSearchedItemsReducer;
  return { products };
};

export default connect(mapStateToProps, { searchAction: getSearchedItemsAction })(SearchComponent);
