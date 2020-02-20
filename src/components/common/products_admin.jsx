import React from 'react'
import '../../assets/css/styles.css'
import edit from '../../assets/images/svg/edit.svg';
import delete_img from '../../assets/images/svg/delete.svg';



const shorten_text = (sentence) => {
  var maxLength = 15;
  var trimmedString = sentence.substr(0, maxLength);
  //re-trim if we are in the middle of a word
  return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
}

export default function ProductsComponent({ products, handleDeleteProduct, showEditProductForm }) {
  if (products.length > 0) {
    return products.map(product => {
      return (
        <div className="product-admin-card quantity-item" key={product.id}>
          <div><img className="product-image" src={product.image_1_url} alt="" />
          <div className="shop-card-action-row"><button onClick={()=>{showEditProductForm(product)}} className="category-option"><img src={edit} alt="edit" /></button>{"    "}<button onClick={()=>handleDeleteProduct(product)} className="category-option"><img src={delete_img} alt="delete" /></button></div>
            <hr />
            <p className="product-card-text"> {shorten_text(product.name)} </p>
            </div>
         </div>
      );
    });
  }
  else {
    return (
      <div >
        There are no products for that yet
          </div>);
  }
}


// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import '../../assets/css/styles.css'
// import edit from '../../assets/images/svg/edit.svg';
// import delete_img from '../../assets/images/svg/delete.svg';


// class ProductsComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     }
//   }

//   shorten_text = (sentence) => {
//   var maxLength = 25;
//   var trimmedString = sentence.substr(0, maxLength);
//   //re-trim if we are in the middle of a word
//   return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
// }

//   render() {
//     const { products } = this.props.products;
//     return (
//       {
//         if(products) {
//           let url = "/product-detail/"
//           return products.map(product => {
//             return (
//               <div className="product-admin-card" key={product.id}>
//                 <a href={url + product.id} ><img className="product-image" src={product.image_1_url} alt="" />
//                   <div className="shop-card-action-row"><button onClick={() => { }} className="category-option"><img src={edit} alt="edit" /></button>{" "}<button onClick={() => { }} className="category-option"><img src={delete_img} alt="delete" /></button></div>
//                   <hr />
//                   <p className="product-card-text"> {this.shorten_text(product.name)} </p></a>
//               </div>

//             );
//           });
//         }
//       });
//   }
// }
// export const mapStateToProps = state => ({
// });
// export default connect(mapStateToProps, {
// })(ProductsComponent);