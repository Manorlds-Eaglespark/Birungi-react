import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getProductDetailAction from '../actions/getProductDetailAction';


class productDetailComponent extends Component {

    constructor(props) {
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
        cart_prds.push({ "id": product_id, "qty": items_number, "image": image, "name": name, "price": price });
        localStorage.setItem("cart_products", JSON.stringify(cart_prds));
    }

    add_number_of_items = (x) => {
        this.setState({
            items_number: x + 1,
            more_than_one_pieces: true
        });
    }

    subtract_number_of_items = (x) => {

        if (x < 2) {
            this.setState({
                more_than_one_pieces: false
            })
        }
        if (x > 1) {
            this.setState({
                items_number: x - 1
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
        const { items_number, more_than_one_pieces, change_pic_flag, pic_to } = this.state;
        return (
            <div className="content-container">
                <div className="navigation-text"><a href="/">Home</a> > <a href="/products">Shop</a> > {productDetail.name}</div>
                <div className="father">
                    <div className="brother">
                        <div className="brother-a">
                            <button className="imagesButton" onClick={e => this.change_image_to(productDetail.image_1_url)}><img className="product-other-images" src={productDetail.image_1_url} alt="" /></button>
                            <button className="imagesButton" onClick={e => this.change_image_to(productDetail.image_2_url)}><img className="product-other-images" src={productDetail.image_2_url} alt="" /></button>
                            <button className="imagesButton" onClick={e => this.change_image_to(productDetail.image_3_url)}><img className="product-other-images" src={productDetail.image_3_url} alt="" /></button>
                            <button className="imagesButton" onClick={e => this.change_image_to(productDetail.image_4_url)}><img className="product-other-images" src={productDetail.image_4_url} alt="" /></button>
                            <button className="imagesButton" onClick={e => this.change_image_to(productDetail.image_5_url)}><img className="product-other-images" src={productDetail.image_5_url} alt="" /></button>
                        </div>
                        <div className="brother-b">
                            {change_pic_flag ? <img className="detailImage" src={pic_to} alt="" /> : <img className="detailImage" src={productDetail.image_1_url ? productDetail.image_1_url : ""} alt="" />}

                            <div className="order-box">
                                <br />
                                <div className="order-box-item quantity">
                                    <p className="full-width quantity-item">Order Quantity</p><br/>
                                    <button className="quantity-item" onClick={e => this.subtract_number_of_items(items_number)}> - </button>
                                    <p className="quantity-item"> <i> {more_than_one_pieces ? items_number + " pieces" : items_number + " piece"+'\xa0'} </i> </p>
                                    <button className="quantity-item" onClick={e => this.add_number_of_items(items_number)}> + </button>
                                </div>
                                <div className="order-box-item">
                                    <button className="add-to-cart-button" onClick={e => this.add_to_cart_pressed(productDetail.id, productDetail.pic_1, productDetail.name, productDetail.price)}>
                                        Add This Item To Cart
                            </button>
                                </div>
                            </div>
                            <hr />


                        </div>
                    </div>
                    <div className="sister">
                        <p className="product-detail-title">{productDetail.name}</p>
                        <p className="product-detail-brand">{productDetail.brand}</p>
                        <hr />
                        <p className="product-detail-brand">{productDetail.description}</p>
                        <hr />
                        <p className="product-detail-price">UGX {this.numberWithCommas(productDetail.price + "")}</p>
                        <p className="product-detail-brand">Package Size: {productDetail.measurements}</p>
                        <hr />
                        <p className="product-amenity product-detail-brand">{productDetail.detail_1}</p>
                        <p className="product-amenity product-detail-brand">{productDetail.detail_2}</p>
                        <p className="product-amenity product-detail-brand">{productDetail.detail_3}</p>
                        <p className="product-amenity product-detail-brand">{productDetail.detail_4}</p>
                        <p className="product-amenity product-detail-brand">{productDetail.detail_5}</p>
                        <hr /> <br />
                    </div>
                </div>

                <hr className="lightseagreen-background" />
                <hr />
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
