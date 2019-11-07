import React, { Component } from 'react'

export default class cartComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all_total: 0
        }
    }

    update_cart_total = (x) => {
        this.setState({
            all_total: x
        });
    }

    shorten_text = (sentence) => {
        var maxLength = 25;
        var trimmedString = sentence.substr(0, maxLength);
        //re-trim if we are in the middle of a word
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    }

    numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {

        const { all_total } = this.state;
        const product_url = "/product-detail/";

        const cart_product_s = localStorage.getItem("cart_products");
        var cart_produc_ts = JSON.parse(cart_product_s);
        let cart_products = cart_produc_ts == null ? [] : cart_produc_ts;

        return (
            <div className="content-container">
                <div className="navigation-text"><a href="/">Home</a> > <a href="/cart"> Cart </a></div>
                <div className="cart-container">
                    <div className="cart-items-table">
                        <table className="MyClassName">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>

                            </thead>
                            <tbody>

                                {
                                    cart_products.map(cart_product => {
                                        return (
                                            <tr key={cart_product.id} onLoad={e => this.update_cart_total((cart_product.qty * cart_product.price) + all_total)}>
                                                <td>
                                                    <a className="table_link" href={product_url + cart_product.id}><img className="vertical-al cart-image" src={cart_product.image} alt="" />
                                                    &nbsp;{ this.shorten_text(cart_product.name)}</a>
                                                </td>
                                                <td>UGX {this.numberWithCommas(cart_product.price)}</td>
                                                <td>{cart_product.qty}</td>
                                                <td>UGX {this.numberWithCommas(cart_product.qty * cart_product.price)}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                    <div className="cart-totals">
                        <div className="personal_info">
                            <div className="cart-totals-container">
                                <div className="cart-element-a">
                                    <input type="text" required autoFocus placeholder="Name" />
                                    <input type="text" required placeholder="Delivery Address" />
                                    <input type="text" required placeholder="Phone Number" />
                                    <input type="text" required placeholder="Email Address" />
                                    <select name="payment_method">
                                        <option value="volvo">Payment Method</option>
                                        <option value="saab">Cash on Delivery</option>
                                        <option value="fiat">Mobile Money</option>
                                        <option value="audi">Credit/Debit Card</option>
                                    </select>
                                </div>
                                <div className="cart-element-b">
                                    <p><span className="highlighter">Cart Total:</span> UGX {this.numberWithCommas(all_total)}</p>
                                    <p><span className="highlighter">Delivery Fees:</span> Free around Kampala</p>
                                    <p><span className="highlighter">Processing Fees:</span> UGX 500</p>
                                    <p><span className="highlighter">Total:</span> UGX {this.numberWithCommas(all_total + 500)}</p>
                                    <button className="checkout_button" type="submit">CHECK OUT</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                    </div>

                </div>

                </div>

                )
            }
        }
