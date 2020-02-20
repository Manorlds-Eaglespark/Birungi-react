import React from 'react';
import storeIcon from '../../assets/images/shop.svg'

export default function EditCategoryComponent({ category, show_style,  onFileChange, onInputChange, handleEditCategorySubmit, show_edit_Category_form, name_category_edit, description_category_edit }) {
    return (
        category ? (
            <div style={show_style} className="modal">
                <form className="modal-content animate" onSubmit={handleEditCategorySubmit}>
                    <div className="imgcontainer">
                        <span onClick={show_edit_Category_form} className="close">&times;</span>
                        <img src={storeIcon} alt="" className="avatar" />
                    </div>
                    <h3 className="full-width">Edit Category</h3>
                    <div className="container">
                        <div className="modal-input">
                            <label className="product-detail-brand">Name</label><br />
                            <input
                                type="text"
                                placeholder={category.name}
                                name="name_category_edit"
                                value={name_category_edit}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="modal-input">
                            <label className="product-detail-brand">Description</label><br />
                            <input
                                type="text"
                                value={description_category_edit}
                                placeholder={category.description}
                                name="description_category_edit"
                                onChange={onInputChange}
                            />
                        </div>
                        <br />
                        <div className="modal-input">
                            <label className="product-detail-brand">Change Icon Image</label><br />
                            <input
                                type="file"
                                name="icon_file_category_edit"
                                onChange={onFileChange}
                            />
                        </div>
                        <br />
                        <button className="login_button" type="submit">Update Category</button>
                    </div>
                </form>
            </div>
        ) : '')
}
