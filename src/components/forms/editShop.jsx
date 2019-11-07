import React from 'react';
import storeIcon from '../../assets/images/shop.svg'

export default function EditShopComponent({shop_detail, show_style, onInputChange, handleEditShopSubmit, show_edit_Shop_form, name, address, email, tel1, tel2, brief, description}) {
  return (
    shop_detail.shop ? (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={handleEditShopSubmit}>
        <div className="imgcontainer">
                <span onClick={show_edit_Shop_form} className="close">&times;</span>
                <img src={storeIcon} alt="" className="avatar" />
            </div>
            <h3 className="full-width">Edit Shop Detail</h3>
            <div className="container">
                <div className="modal-input">
                <label className="product-detail-brand"> Shop Name </label><br />
                <input 
                    type="text"
                    name="name"
                    value={name}
                    placeholder={shop_detail.shop.name}
                    onChange={onInputChange}
                    />
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Address</label><br />
                <input 
                    type="text"
                    value={address}
                    placeholder={shop_detail.shop.address}
                    name="address"
                    onChange={onInputChange}
                    />
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Email</label><br />
                <input 
                    type="text"
                    value={email}
                    placeholder={shop_detail.shop.email}
                    name="email"
                    onChange={onInputChange}
                    />
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Telephone 1</label><br />
                <input 
                    type="text"
                    value={tel1}
                    placeholder={shop_detail.shop.telephone_1}
                    name="tel1"
                    onChange={onInputChange}
                    />
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Telephone 2</label><br />
                <input 
                    type="text"
                    value={tel2}
                    placeholder={shop_detail.shop.telephone_2}
                    name="tel2"
                    onChange={onInputChange}
                    />
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Brief</label><br />
                <input 
                    type="text" 
                    value={brief}
                    placeholder={shop_detail.shop.short_brief}
                    name="brief"
                    onChange={onInputChange}
                    />
                </div>

                <div className="modal-input">
                <label className="product-detail-brand">Description</label><br />
                <input 
                    type="text"
                    value={description}
                    onChange={onInputChange}
                    placeholder={shop_detail.shop.description}
                    name="description"
                    />
                </div>

                <button className="login_button" type="submit">Save</button>
            </div>
        </form>
    </div>
  ):'')
}
