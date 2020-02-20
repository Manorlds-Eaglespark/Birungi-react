import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getAllProductsAction from '../actions/getAllProductsAction';
import getAllCategoriesAction from '../actions/getAllCategoriesAction';
import getCategoryAction from '../actions/getCategoryAction';
import SearchComponent from './common/search';
import ProductsComponent from './common/products';
import InfoComponent from './common/infoComponent';
import { Slideshow } from './slideComponent';


class landingPageComponent extends Component {

    constructor(props) {
        super(props);
        this.productsCategoryRef = React.createRef();
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

    openCategory = (category_id, category_description) => {
        this.setState({ categoryClicked: true, categoryDescription: category_description });
        const { fetchProductCategory } = this.props;
        fetchProductCategory(category_id);
        window.scrollTo({ behavior: 'smooth', top: this.productsCategoryRef.current.offsetTop })
    };

    render() {

        const { categories, productCategory } = this.props;
        var { products } = this.props;
        products = products.slice(0, 25);
        const { categoryClicked, categoryDescription } = this.state;

        const allCategories = categories.map(category => (
            <button onClick={e => this.openCategory(category.id, category.description)} className="category-card" key={category.id}>
                <div className="category-card-item">
                    <img src={category.icon_url} className="category-image" alt="" />
                </div>
                <div className="category-card-item">
                    <p className="center-item">{category.name}</p>
                </div></button>
        ));


        return (
            <div>
                <div className="content-container">
                    <div className="slide-container">
                        <Slideshow products={(products.sort(function(a, b){return 0.5 - Math.random()})).slice(0, 15)} />
                    </div>
                </div>
                <div className="full-width">
                    <div className="content-container">
                        <br />&nbsp;<br />
                        <SearchComponent />
                        <br /> &nbsp; <br />

                        <div className="category-header"><i>Categories</i></div>
                        <div className="product-categories">
                            {allCategories}
                        </div>
                    </div>
                </div>
                <div ref={this.productsCategoryRef} className="content-container">
                    <hr className="lightseagreen-background" />
                    <div className="category-header"><i>Products Overview</i></div>
                    <br />
                    <div className="category-description">{categoryDescription}</div>
                    <br />
                    <div className="product-section">
                        {
                            categoryClicked ? <ProductsComponent products={productCategory} /> : <ProductsComponent products={products} />
                        }
                    </div>
                </div>
                <InfoComponent />
            </div>
        )
    }
}


landingPageComponent.propTypes = {
    categories: PropTypes.arrayOf(
        PropTypes.shape({
            description: PropTypes.string,
            icon_image: PropTypes.string,
            name: PropTypes.string,
        }),
    ).isRequired,
};

landingPageComponent.propTypes = {
    fetchProducts: PropTypes.func.isRequired,
};

export const mapStateToProps = (state) => {
    const { products } = state.getAllProductsReducer;
    const { categories } = state.getAllCategoriesReducer;
    const { productCategory } = state.getCategoryReducer;
    return { products, categories, productCategory };
};

export default connect(mapStateToProps,
    { fetchProducts: getAllProductsAction, fetchCategories: getAllCategoriesAction, fetchProductCategory: getCategoryAction })(landingPageComponent);
