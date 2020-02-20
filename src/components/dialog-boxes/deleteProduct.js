import React from 'react';
import productIcon from '../../assets/images/svg/product.svg'

export default function DeleteProductDialogComponent({show_style, show_delete_product_dialog, product, handleDeleteProduct}) {
  return (
    <div style={show_style} className="modal">
    <form className="modal-content animate" onSubmit={product?()=>handleDeleteProduct(product.id):()=>{}}>
        <div className="imgcontainer">
                <span onClick={show_delete_product_dialog} className="close">&times;</span>
                <img src={productIcon} alt="" className="avatar" />
            </div>
            <p className="full-width"> Deleting { product ? product.name: '' } </p><br />
            <h3 className="full-width orange-color">Are You Sure?</h3><br />
            <div className="container">
                <div className="modal-input">
                </div>

                <div className="full-width shop-card-action-row"><button className="red-color shop-detail-button" type="submit">DELETE</button> &nbsp; <button type="button" onClick={show_delete_product_dialog} className="shop-detail-button" >CANCEL</button></div>
            </div>
        </form>
    </div>
  )
}
