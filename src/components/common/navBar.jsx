import React from 'react'
import '../../assets/css/styles.css'
import checkout from '../../assets/images/svg/checkout.svg'
import cart from '../../assets/images/svg/cart.svg'
import info from '../../assets/images/svg/info.svg'


export default function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="padding-space">
                    <a href="/" className="logo">
                        <div className="nav-link nav-brand">
                            BIRUNGI STORE
                        </div>
                    </a>


                    <div className="nav-link-container">
                        <div className="nav-element nav-link">
                            <a className="strong-text" href="/products"><img style={{ height: 30, width: 30 }} src={cart} alt="" /> <span className="disappear-small">Shop</span></a>
                        </div>
                        <div className="nav-element nav-link">
                            <a className="strong-text" href="/cart"><img style={{ height: 30, width: 30 }} src={checkout} alt="" /> <span className="disappear-small">Checkout</span></a>
                        </div>
                        <div className="nav-element nav-link">
                            <a className="strong-text" href="/"><img style={{ height: 30, width: 30 }} src={info} alt="" /> <span className="disappear-small">Connect</span></a>
                        </div>
                    </div>


                </div>
            </nav>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}
