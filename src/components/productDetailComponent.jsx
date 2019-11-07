import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getProductDetailAction from '../actions/getProductDetailAction';


class productDetailComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            items_number: 1,
            more_than_one_pieces: false,
            change_pic_flag: false,
            pic_to: "",
        };
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } 


    add_to_cart_pressed = (product_id, image, name, price) => {
        const { items_number } = this.state;
        var cart_product_s = localStorage.getItem("cart_products");
        var cart_products = JSON.parse(cart_product_s);
        let cart_prds = cart_products == null ? [] : cart_products;
        cart_prds.push({"id": product_id, "qty": items_number, "image": image, "name": name, "price": price });
        localStorage.setItem("cart_products", JSON.stringify(cart_prds));
    }

    add_number_of_items = (x) => {
        this.setState({
            items_number: x+1,
            more_than_one_pieces: true
        });
    }

    subtract_number_of_items = (x) => {
        
        if(x < 2){
            this.setState({
                more_than_one_pieces: false
            })
        }
        if(x > 1){
            this.setState({
                items_number: x-1
            });
        }
    }

    change_image_to = (image) => {
        this.setState({
            change_pic_flag: true,
            pic_to: image,
        });
    }
 
    componentDidMount() {
        const product_id = this.props.match.params.id;
        const { fetchProductDetail } = this.props;
        fetchProductDetail(product_id);
      }

    render() {
        
      const { productDetail } = this.props;

      const other_images = productDetail.images ? (productDetail.images).map(image => {
        return (<button className="imagesButton" key={image.id} onClick={e=>this.change_image_to(image.url)}><img className="product-other-images" src={image.url} alt="" /></button>);
    }): null;
    
    const product_amenities = productDetail.amenities ? (productDetail.amenities).map(amenity => {
        return (<p key={amenity.id} className="product-amenity product-detail-brand">{amenity.description}</p>);
    }) : null;

 
      const { items_number, more_than_one_pieces, change_pic_flag, pic_to } = this.state;
        return (
            <div className="content-container">
                <div className="navigation-text"><a href="/">Home</a> > <a href="/products">Shop</a> > {productDetail.name}</div>
                <div className="father">
                    <div className="brother">
                        <div className="brother-b">
                             { change_pic_flag ? <img className="detailImage" src={pic_to}  alt="" /> : <img className="detailImage" src={productDetail.images ? productDetail.images[0].url: ""} alt="" /> }
                        </div>
                        <div className="brother-a">
                        {other_images}
                        </div>
                    </div>
                    <div className="sister">
                        <p className="product-detail-title">{productDetail.name}</p>
                        <hr />
                        <p className="product-detail-brand">{productDetail.brand}</p>
                        <p className="product-detail-price">UGX {this.numberWithCommas(productDetail.price+"")}</p>
                        <p className="product-detail-brand">Package Size: {productDetail.measurements}</p>      
                        <hr />
                        {product_amenities}
                        <hr /> <br />
                        <div className="quantity">
                            <button className="quantity-button" onClick={e=>this.subtract_number_of_items(items_number)}> - </button>
                            <p className="quantity-p"> &nbsp; { more_than_one_pieces ? items_number + " pieces" : items_number + " piece" } &nbsp; </p>
                            <button className="quantity-button" onClick={e=>this.add_number_of_items(items_number)}> + </button>
                        </div>
                        <div className="product-price">
                            <button className="add-to-cart-button" onClick={e=>this.add_to_cart_pressed(productDetail.id, productDetail.pic_1, productDetail.name, productDetail.price)}>
                                Add To Cart
                            </button>
                        </div>
                    <hr />    
                    <hr className="lightseagreen-background"/>
                    <hr />
                    </div>
                </div>
            </div>
        )
    }
}
  
  productDetailComponent.propTypes = {
    fetchProductDetail: PropTypes.func.isRequired,
  };
  
  export const mapStateToProps = (state) => {
    const { productDetail } = state.getProductDetailReducer;
    return { productDetail };
  };
  
  export default connect(mapStateToProps,
    { fetchProductDetail: getProductDetailAction })(productDetailComponent);
