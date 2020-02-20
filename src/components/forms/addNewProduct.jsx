import React from 'react';
import productIcon from '../../assets/images/product.png'

export default function NewProductComponent({show_style, showAddProductForm, onInputChange, onFileChange, handleNewProductSubmit}) {
  return (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={handleNewProductSubmit}>
        <div className="imgcontainer">
                <span onClick={showAddProductForm} className="close">&times;</span>
                <img src={productIcon} alt="" className="avatar" />
            </div>
            <div className="container">
                <div className="modal-input">
                <label><b>Name</b></label><br />
                <input 
                    type="text" 
                    placeholder="Enter product Name e.g. Porcelein rabbit decor" 
                    name="name"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Price</b></label><br />
                <input 
                    type="text"
                    placeholder="Price in UGX e.g 45000" 
                    name="price"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Brand</b></label><br />
                <input 
                    type="text"
                    placeholder="Brand e.g Sony" 
                    name="brand"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Measurements</b></label><br />
                <input 
                    type="text"
                    placeholder="measurements e.g 4.7 x 2 x 0.7 inches, 1.76 Kg" 
                    name="measurements"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label><b>Description</b></label><br />
                <input 
                    type="text"
                    placeholder="Describe your product" 
                    name="description"
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="horizontal-spacing">&nbsp;</div>
                
                <div className="modal-input">
                <label><b> Specifications & details</b></label><br />
                <input 
                    type="text"
                    placeholder="Add more details if available" 
                    name="detail_1"
                    onChange={onInputChange}    
                />
                <input 
                    type="text"
                    placeholder="..." 
                    name="detail_2"
                    onChange={onInputChange}
                />
                    <input 
                    type="text"
                    placeholder="..." 
                    name="detail_3"
                    onChange={onInputChange}
                />
                <input 
                    type="text"
                    placeholder="..." 
                    name="detail_4"
                    onChange={onInputChange}
                />
                    <input 
                    type="text"
                    placeholder="..." 
                    name="detail_5"
                    onChange={onInputChange}
                />
                </div>
                <div className="modal-input">
                <label><b>Upload Images</b></label>
                <div className="horizontal-spacing">&nbsp;</div>
                <input
                    type="file"
                    name="image_1"
                    onChange={onFileChange}
                    required/>
                    <div className="horizontal-spacing">&nbsp;</div>

                <input
                    type="file"
                    name="image_2"
                    onChange={onFileChange}
                    required/>
                    <div className="horizontal-spacing">&nbsp;</div>

                <input
                    type="file"
                    name="image_3"
                    onChange={onFileChange}
                />
                    <div className="horizontal-spacing">&nbsp;</div>

                <input
                    type="file"
                    name="image_4"
                    onChange={onFileChange}
                />
                    <div className="horizontal-spacing">&nbsp;</div>
                <input
                    type="file"
                    name="image_5"
                    onChange={onFileChange}
                />
                </div>
                <br />
                
                <div className="horizontal-spacing">&nbsp;</div>

                <button className="login_button" type="submit">Add New Product</button>
            </div>
        </form>
    </div>
  );
}
