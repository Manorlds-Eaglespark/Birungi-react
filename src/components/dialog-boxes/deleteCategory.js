import React from 'react';
import storeIcon from '../../assets/images/shop.svg'

export default function DeleteCategoryDialogComponent({show_style, show_delete_category_dialog, category, deleteShopCategory}) {
  return (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={category?()=>deleteShopCategory(category.id):()=>{}}>
        <div className="imgcontainer">
                <span onClick={show_delete_category_dialog} className="close">&times;</span>
                <img src={storeIcon} alt="" className="avatar" />
            </div>
            <p className="full-width red-color"> You are about to delete { category ? category.name: '' } category </p><br />
            <h3 className="full-width orange-color">Are You Sure?</h3><br />
            <div className="container">
                <div className="modal-input">
                </div>

                <div className="full-width shop-card-action-row"><button className="shop-detail-button" type="submit">DELETE</button> &nbsp; <button type="button" onClick={show_delete_category_dialog} className="shop-detail-button" >CANCEL</button></div>
            </div>
        </form>
    </div>
  )
}
