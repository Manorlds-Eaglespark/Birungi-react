import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeProperties = {
  duration: 2500,
  transitionDuration: 500,
  infinite: false,
  indicators: true
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

const shorten_text = (sentence) => {
    var maxLength = 25;
    var trimmedString = sentence.substr(0, maxLength);
    //re-trim if we are in the middle of a word
    return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
}

export const Slideshow = ({products}) => {

    const show_products =  products.map(product => {
        return (
                <div className="each-fade slide-card" key={product.id}>
                    <div className="image-container slide-card-item">
                        <img className="product-image" src={product.images.length === 0 ? '':product.images[0].url} alt="" />
                    </div>  
                    <div className="slide-card-item slide-text-length">
                        <div className="slide-info-container">
                        
                            <div className="slide-info product-card-brand">
                                { product.brand ?  product.brand : ''}
                                <hr />
                            </div>
                            <div className="slide-info">
                                {shorten_text(product.name)}
                            </div>
                            <div className="slide-info">
                                UGX {numberWithCommas(product.price)} 
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    });

  return (
    <Fade {...fadeProperties}>
        {show_products}
    </Fade>
  )
}