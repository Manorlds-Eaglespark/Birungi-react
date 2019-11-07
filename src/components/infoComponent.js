import React from 'react'
import telephone from '../assets/images/telephone.png'
import email from '../assets/images/email.png'
import '../assets/css/styles.css'

const InfoComponent  = () => (
    <div className="content-container">
    
    <hr/>
    <br />
        <div className="father">
            <div className="one_part color-orangered">Why Birungi
            <hr/>
                <ol>
                    <li className="color-orangered">Customer Oriented</li>
                    <li className="color-orangered">Quality Focus</li>
                    <li className="color-orangered">Unique Products</li>
                    <li className="color-orangered">Door to door Deliveries</li>
                </ol>
                &nbsp;
            </div>
            <div className="one_part">New Here?
            <hr/>
                <form>
                    <input type="email" placeholder="Email Address"/>
                </form>
                Subscribe to receive our newsletters.
            </div>
            <div className="one_part">Contact Us Today
                <hr/>
                <p><img className="vertical-al" src={telephone} alt=""/> <span valign="center">+256 775910960 </span></p>
                <p><img className="vertical-al" src={email} alt=""/> ntabazr@gmail.com</p>
            </div>
        </div>
        <hr className="yellow-background"/>
        <hr className="black-background"/>
        <hr className="red-background"/>
  </div>
  );
  export default InfoComponent