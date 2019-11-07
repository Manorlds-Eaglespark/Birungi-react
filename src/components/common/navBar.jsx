import React from 'react'
import '../../assets/css/styles.css'
import shop from '../../assets/images/shopping-cart.png'
import cart from '../../assets/images/cart.png'
import info from '../../assets/images/info.png'


export default function NavBar() {
    return (
        <div>
        <nav className="navbar">
            <div className="padding-space">
                <div className="nav-link nav-brand">
                    <a href="/" className="logo">
                       BIRUNGI STORE
                    </a>
                </div>
                <div className="nav-link-container">  
                    <div className="nav-element nav-link">
                        <a className="strong-text" href="/products"><span className="disappear-small">Shop</span><img src={cart} alt="" /></a>
                    </div>
                    <div className="nav-element nav-link">
                        <a className="strong-text" href="/cart"><span className="disappear-small">Cart</span><img src={shop} alt="" /></a>
                    </div>
                    <div className="nav-element nav-link">
                        <a className="strong-text" href="/"><span className="disappear-small">Join</span><img src={info} alt="" /></a>
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
