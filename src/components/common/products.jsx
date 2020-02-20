import React from 'react'
import '../../assets/css/styles.css'


const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const shorten_text = (sentence) => {
  var maxLength = 20;
  var trimmedString = sentence.substr(0, maxLength);
  return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
}

let url = "/product-detail/"

export default function ProductsComponent({ products }) {
    if(products.length > 0){
    return products.map(product => {
        return (<div className="product-card" key={product.id}>
            <a href={url + product.id} ><img className="product-image" src={ product.image_1_url} alt="" />
            <p className="product-card-brand"> {product.brand ? product.brand : '------------'} </p>
            <hr className="lightseagreen-background"/>
            <p className="product-card-text"> {product.name ? shorten_text(product.name) : '----------'} </p>
            <p className="lightseagreen-background product-card-text"> {product.price ? 'UGX'+ numberWithCommas(product.price): '-----------'} </p></a>
        </div>);
    });
    }
    else {  
        return (
          <div > 
            That product is not available yet.
          </div>);
    }
}
