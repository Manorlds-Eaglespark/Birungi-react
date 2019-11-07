import React from 'react';
import storeIcon from '../../assets/images/shop.svg'

export default function NewProductComponent({show_style, showAddProductForm, onInputChange, handleNewProductSubmit, name, brand, dimensions}) {
  return (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={handleNewProductSubmit}>
        <div className="imgcontainer">
                <span onClick={showAddProductForm} className="close">&times;</span>
                <img src={storeIcon} alt="" className="avatar" />
            </div>
            <div className="container">
                <div className="modal-input">
                <label><b>Product Name</b></label><br />
                <input 
                    type="text" 
                    placeholder="Enter product Name e.g. Porcelein rabbit decor" 
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Price</b></label><br />
                <input 
                    type="text" 
                    value={brand}
                    placeholder="Brand e.g Sony" 
                    name="brand"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Dimensions</b></label><br />
                <input 
                    type="text" 
                    value={dimensions}
                    placeholder="Dimensions e.g 4.7 x 2 x 0.7 inches, 1.76 Kg" 
                    name="dimensions"
                    onChange={onInputChange}
                    required/>
                </div>

                <button className="login_button" type="submit">Add New Product</button>
            </div>
        </form>
    </div>
  );
}
