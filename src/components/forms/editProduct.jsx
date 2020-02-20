import React from 'react';
import edit from '../../assets/images/svg/edit.svg';

export default function EditProductComponent({ product, show_style, handleEditProductSubmit,  onFileChange, onInputChange, showEditProductForm, show_edit_Category_form, name_category_edit, description_category_edit }) {
    return (
        product ? (
            <div style={show_style} className="modal">
            <form className="modal-content animate" onSubmit={()=>handleEditProductSubmit(product.id)}>
                <div className="imgcontainer">
                        <span onClick={showEditProductForm} className="close">&times;</span>
                        <img src={edit} alt="" className="avatar" />
                    </div>
                    <div className="container">
                        <div className="modal-input">
                        <label><b>Name</b></label><br />
                        <input 
                            type="text" 
                            placeholder={product.name} 
                            name="product_edit_name"
                            onChange={onInputChange}
                        />
                        </div>
        
                        <div className="modal-input">
                        <label><b>Price</b></label><br />
                        <input 
                            type="text"
                            placeholder={product.price}
                            name="product_edit_price"
                            onChange={onInputChange}
                        />
                        </div>
        
                        <div className="modal-input">
                        <label><b>Brand</b></label><br />
                        <input 
                            type="text"
                            placeholder={product.brand}
                            name="product_edit_brand"
                            onChange={onInputChange}
                        />
                        </div>
        
                        <div className="modal-input">
                        <label><b>Measurements</b></label><br />
                        <input 
                            type="text"
                            placeholder={product.measurements}
                            name="product_edit_measurements"
                            onChange={onInputChange}
                        />
                        </div>
        
                        <div className="modal-input">
                        <label><b>Description</b></label><br />
                        <input 
                            type="text"
                            placeholder={product.description}
                            name="product_edit_description"
                            onChange={onInputChange}
                        />
                        </div>
        
                        <div className="horizontal-spacing">&nbsp;</div>
                        
                        <div className="modal-input">
                        <label><b> Specifications & details</b></label><br />
                        <input 
                            type="text"
                            placeholder={product.detail_1}
                            name="product_edit_detail_1"
                            onChange={onInputChange}    
                        />
                        <input 
                            type="text"
                            placeholder={product.detail_2}
                            name="product_edit_detail_2"
                            onChange={onInputChange}
                        />
                            <input 
                            type="text"
                            placeholder={product.detail_3}
                            name="product_edit_detail_3"
                            onChange={onInputChange}
                        />
                        <input 
                            type="text"
                            placeholder={product.detail_4}
                            name="product_edit_detail_4"
                            onChange={onInputChange}
                        />
                            <input 
                            type="text"
                            placeholder={product.detail_5}
                            name="product_edit_detail_5"
                            onChange={onInputChange}
                        />
                        </div>
                        <div className="modal-input">
                        <label><b>Upload Images</b></label>
                        <div className="horizontal-spacing">&nbsp;</div>
                        {/* <input
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
                        /> */}
                        </div>
                        <br />
                        
                        <div className="horizontal-spacing">&nbsp;</div>
        
                        <button className="login_button" type="submit">Update Product</button>
                    </div>
                </form>
            </div>
        ) : '')
}
