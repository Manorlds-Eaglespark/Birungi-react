import React from 'react';
import storeIcon from '../../assets/images/shop.svg'

export default function NewCategoryComponent({show_style, onInputChange, handleNewCategorySubmit, onFileChange, show_create_category_form, name, description}) {
  return (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={handleNewCategorySubmit}>
        <div className="imgcontainer">
                <span onClick={show_create_category_form} className="close">&times;</span>
                <img src={storeIcon} alt="" className="avatar" />
            </div>
            <div className="container">
                <div className="modal-input">
                <label className="product-detail-brand">Name</label><br />
                <input 
                    type="text" 
                    placeholder="Enter Category name e.g. Ladies' Shoes" 
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    required/>
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Description</label><br />
                <input 
                    type="text" 
                    value={description}
                    placeholder="Description e.g Shoes for Office, Party, Casual, Indoor & Outdoor" 
                    name="description"
                    onChange={onInputChange}
                    required/>
                </div>
                <br />
                <div className="modal-input">
                <label className="product-detail-brand">Upload Icon Image - Helps clients find your products</label><br />
                <input
                    type="file"
                    name="icon_file"
                    onChange={onFileChange}
                    required/>
                </div>
                <br />

                <button className="login_button" type="submit">Save New Category</button>
            </div>
        </form>
    </div>
  );
}
