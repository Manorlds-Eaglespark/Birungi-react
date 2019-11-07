import React from 'react'
import PropTypes from 'prop-types';
import '../../assets/css/styles.css'


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let url = "/product-detail/"
const ProductsComponent = ({ products }) => {

    if(products.length > 0){
    return products.map(product => {
        return (<div className="product-card" key={product.id}>
            <a href={url + product.id} ><img className="product-image" src={ product.images.length === 0 ? '' : product.images[0].url} alt="" />
            <p className="product-card-brand"> {product.brand} </p>
            <hr/>
            <p className="product-card-text"> {product.name} </p></a>
            <p className="product-card-text"> UGX {numberWithCommas(product.price)} </p>
        </div>);
    })
    }
    else {  
        return (
          <div > 
            There are no products for that yet
          </div>);
    }
};

export default ProductsComponent;

ProductsComponent.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
          brand: PropTypes.string,
          category: PropTypes.string,
          description: PropTypes.string,
          name: PropTypes.string,
          price: PropTypes.number,
          pic_1: PropTypes.string,
          pic_2: PropTypes.string,
          pic_3: PropTypes.string,
          pic_4: PropTypes.string,
        }),
      ).isRequired
};

ProductsComponent.defaultProps = {
  products: []
};
