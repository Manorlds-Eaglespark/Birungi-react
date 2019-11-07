import React from 'react';
import storeIcon from '../../assets/images/shop.svg'

export default function NewShopComponent({show_style, onInputChange, handleSubmit, show_create_Shop_form, name, address, email, tel1, tel2, brief, description}) {
  return (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={handleSubmit}>
        <div className="imgcontainer">
                <span onClick={show_create_Shop_form} className="close">&times;</span>
                <img src={storeIcon} alt="" className="avatar" />
            </div>
            <div className="container">
                <div className="modal-input">
                <label><b>Shop Name</b></label><br />
                <input 
                    type="text" 
                    placeholder="Enter Shop Name e.g. Birungi" 
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Address</b></label><br />
                <input 
                    type="text" 
                    value={address}
                    placeholder="Address e.g Innovation village, Block B. Ntinda Complex" 
                    name="address"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Email</b></label><br />
                <input 
                    type="text" 
                    value={email}
                    placeholder="Business e.g info@birungishop.com" 
                    name="email"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Telephone 1</b></label><br />
                <input 
                    type="text" 
                    value={tel1}
                    placeholder="Business phone e.g 0757877585" 
                    name="tel1"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Telephone 2</b></label><br />
                <input 
                    type="text" 
                    value={tel2}
                    placeholder="Business phone 2 e.g 0757877585" 
                    name="tel2"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Brief</b></label><br />
                <input 
                    type="text" 
                    value={brief}
                    placeholder="Add a tagline or something about your business" 
                    name="brief"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Description</b></label><br />
                <input 
                    type="text" 
                    value={description}
                    onChange={onInputChange}
                    placeholder="In depth explanation about what your business is all about" 
                    name="description"
                    required/>
                </div>

                <button className="login_button" type="submit">Create New Shop</button>
            </div>
        </form>
    </div>
  );
}
