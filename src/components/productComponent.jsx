import React, { Component } from 'react'
import '../assets/css/styles.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAllCategoriesAction from '../actions/getAllCategoriesAction';
import getCategoryAction from '../actions/getCategoryAction';
import filterImage from '../assets/images/filter.png'
import getAllProductsAction from '../actions/getAllProductsAction';
import ProductsComponent from './common/products';
import SearchComponent from './common/search';
import InfoComponent from '../components/common/infoComponent'

class ProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          categoryClicked: false,
          categoryDescription: '',
        };
      }

    componentDidMount() {
        const { fetchProducts, fetchCategories } = this.props;
        fetchCategories();
        fetchProducts();
      }

    getCategoryProducts = (category_id, category_description) => {
        this.setState({categoryClicked: true, categoryDescription: category_description});
        const { fetchProductCategory } = this.props;
        fetchProductCategory(category_id);
      }

    getAllProducts = (descr) => {
        const { fetchProducts} = this.props;
        this.setState({categoryClicked: false, categoryDescription: descr});
        fetchProducts();
    }

    render() {

        const { products, categories, productCategory } = this.props;
        const { categoryClicked, categoryDescription } = this.state;

        const allCategories = categories.map(category => {
            return(
                <li key={category.id}><button className="categoryButton" onClick={e => this.getCategoryProducts(category.id, category.description)} >{ category.name }</button></li>
            )
        });
        return (
          <div>
            <div className="content-container">
            <div className="navigation-text"><a href="/">Home</a> > <a href="/products"> Shop </a></div>
            </div>
            <SearchComponent />
            <div className="content-container">
                <div className="container-ab">
                    <div className="container-a">
                        <ul> 
                            <li><button className="categoryButton" onClick={e => this.getAllProducts("Quality with Style")} > All Products </button></li>
                            {allCategories}
                        </ul>
                    </div>
                    <div className="container-a">
                        <button className="product-side-button"><img src={filterImage} alt="" />Filter</button>
                    </div>
                </div>

                <hr />
                <div className="category-header">Products</div>
                <div className="category-description">{categoryDescription}</div>
                <br/>
                    <div className="product-section">
                    {
                        categoryClicked ? <ProductsComponent products={productCategory } /> : <ProductsComponent products={products}/>
                    }
                    </div>
            </div>
            <hr className="lightseagreen-background"/>
            <hr className="red-background"/>
            
            <InfoComponent/>
            </div>
        )
    }
}


ProductComponent.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          icon_image: PropTypes.string,
          name: PropTypes.string,
        }),
      ).isRequired,
  };
  
  ProductComponent.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
    fetchProductCategory: PropTypes.func,
    getCategoryProducts: PropTypes.func,
  };
  
  export const mapStateToProps = (state) => {
    const { products } = state.getAllProductsReducer;
    const {categories } = state.getAllCategoriesReducer;
    const {productCategory} = state.getCategoryReducer;
    return { products, categories, productCategory };
  };
  
  export default connect(mapStateToProps,
    { fetchProducts: getAllProductsAction, fetchCategories: getAllCategoriesAction, fetchProductCategory: getCategoryAction })(ProductComponent);
