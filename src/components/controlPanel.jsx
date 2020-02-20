import React, { Component } from 'react';
import '../assets/css/styles.css';
import '../assets/css/w3.css';
import WhyBirungi from './common/whyBirungi';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import NewShopComponent from './forms/addNewShop';
import NewProductComponent from './forms/addNewProduct';
import NewCategoryComponent from './forms/addNewCategory';
import EditShopComponent from './forms/editShop';
import EditCategoryComponent from './forms/editCategory';
import EditProductComponent from './forms/editProduct';
import ProductsComponent from './common/products_admin';
import DeleteShopDialogComponent from './dialog-boxes/deleteShop';
import DeleteCategoryDialogComponent from './dialog-boxes/deleteCategory';
import DeleteProductDialogComponent from './dialog-boxes/deleteProduct';
import deleteCategoryAction from '../actions/deleteCategoryAction'
import deleteProductAction from '../actions/deleteProductAction'
import editProductAction from '../actions/editProductAction'
import createShopAction from '../actions/createShopAction';
import getShopDetailAction from '../actions/getShopDetailAction';
import getAllCategoriesAction from '../actions/getAllCategoriesAction';
import createProductAction from '../actions/createProductAction';
import editShopAction from '../actions/editShopAction';
import createCategoryAction from '../actions/createCategoryAction';
import editCategoryAction from '../actions/editCategoryAction'
import edit from '../assets/images/svg/edit.svg';
import delete_img from '../assets/images/svg/delete.svg';
import create_img from '../assets/images/svg/design.svg';
import add from '../assets/images/plus.png'
import deleteShopAction from '../actions/deleteShopAction';
import getAllShopProductsAction from '../actions/getShopProductsAction'
import { toastFailure } from '../utils/toast'


class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryOptionChosen: false,
            productOptionChosen: false,
            show_new_shop_flag: false,
            show_delete_dialog_flag: false,
            show_delete_category_dialog_flag: false,
            show_delete_product_dialog_flag: false,
            showDeleteCategoryDialogFlag: false,
            edit_shop_flag: false,
            edit_category_flag: false,
            create_category_flag: false,
            addProductFlag: false,
            show_edit_product_flag: false,
            clicked_category_id: '',
            category: {},
            product: {},
            icon_file: '',
            id: '',
            name: '',
            address: '',
            email: '',
            tel1: '',
            tel2: '',
            brief: '',
            description: '',
            brand: '',
            dimensions: '',
            image_1: '',
            image_2: '',
            image_3: '',
            image_4: '',
            image_5: '',
            detail_1: '',
            detail_2: '',
            detail_3: '',
            detail_4: '',
            detail_5: '',
            category_edit_name: '',
            category_edit_description: '',
            category_edit_icon_file: '',
            product_edit_name: '',
            product_edit_price: '',
            product_edit_brand: '',
            product_edit_measurements: '',
            product_edit_description: '',
            product_edit_detail_1: '',
            product_edit_detail_2: '',
            product_edit_detail_3: '',
            product_edit_detail_4: '',
            product_edit_detail_5: '',

        }
    }

    showEditProductForm

    componentDidMount() {
        if (parseInt(sessionStorage.getItem('shop_owner')) === 1) {
            this.getShopDetails();
            this.getAllCategories();
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onFileChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.files
        });
    }

    handleCreateShopSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        const { name, address, email, tel1, tel2, brief, description } = this.state;
        const shopInfo = {
            name,
            address,
            email,
            tel1,
            tel2,
            brief,
            description
        };
        const { createShop } = this.props;
        createShop(shopInfo);
    }

    handleEditShopSubmit = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        const { name, address, email, tel1, tel2, brief, description } = this.state;
        const shopInfo = {
            name,
            address,
            email,
            tel1,
            tel2,
            brief,
            description
        };
        const { editShopDetail } = this.props;
        editShopDetail(shopInfo);
        this.show_edit_Shop_form();
    }

    handleNewCategorySubmit = (e) => {
        e.preventDefault();
        const { icon_file, name, description } = this.state;
        if (icon_file) {
            let file_data = new FormData();
            file_data.append("name", name);
            file_data.append("description", description);
            file_data.append("icon_file", icon_file[0]);
            const { createCategory } = this.props;
            createCategory(file_data);
        }
        else {
            toast.dismiss();
            toastFailure("Select an Icon Image first for your category.", 'A')
        }
    }

    handleNewProductSubmit = (e) => {
        e.preventDefault()
        const { name, price, brand, measurements, description, image_1, image_2, image_3, image_4, image_5, detail_1, detail_2, detail_3, detail_4, detail_5, clicked_category_id } = this.state;
        var { shop } = this.props.shopDetailReducer;
        var form_data = new FormData();
        form_data.append("name", name); form_data.append("shop_id", shop.shop.id); form_data.append("category_id", clicked_category_id); form_data.append("price", price); form_data.append("brand", brand); form_data.append("description", description); form_data.append("measurements", measurements); form_data.append("image_1", image_1[0]);
        form_data.append("image_2", image_2[0]); form_data.append("image_3", image_3[0]); form_data.append("image_4", image_4[0]); form_data.append("image_5", image_5[0]);
        form_data.append("detail_1", detail_1); form_data.append("detail_2", detail_2); form_data.append("detail_3", detail_3); form_data.append("detail_4", detail_4);
        form_data.append("detail_5", detail_5);
        const { addProduct } = this.props;
        addProduct(form_data);
    }

    getAllShopProduct = (function () {
        var executed = false;
        return function () {
            if (!executed) {
                executed = true;
                const { getShopProducts } = this.props;
                getShopProducts(this.props.shopDetailReducer.shop.shop.id)
            }
        };
    })();

    getShopDetails = () => {
        const { getShopDetail } = this.props;
        getShopDetail();
    }

    getAllCategories = () => {
        const { getCategories } = this.props;
        getCategories();
    }

    deleteUserShop = () => {
        const { deleteShop } = this.props;
        deleteShop();
    }

    deleteShopCategory = (id) => {
        const { deleteCategory } = this.props;
        deleteCategory(id);
    }

    deleteShopProduct = (id) => {
        const { deleteProductAction } = this.props;
        deleteProductAction(id);
    }

    editStoreCategory = (id) => {
        const { deleteCategory } = this.props;
        deleteCategory(id);
    }

    handleNewCategorySubmit = (e) => {
        e.preventDefault();
        const { icon_file, name, description } = this.state;
        if (icon_file) {
            let file_data = new FormData();
            file_data.append("name", name);
            file_data.append("description", description);
            file_data.append("icon_file", icon_file[0]);
            const { createCategory } = this.props;
            createCategory(file_data);
        }
        else {
            toast.dismiss();
            toastFailure("Select an Icon Image first for your category.", 'A')
        }
    }

    handleEditCategorySubmit = (e) => {
        e.preventDefault();
        const { category, icon_file_category_edit, name_category_edit, description_category_edit } = this.state;
        let file_data = new FormData();
        file_data.append("name", name_category_edit);
        file_data.append("description", description_category_edit);
        file_data.append("icon_file", icon_file_category_edit[0]);
        const { editCategory } = this.props;

        editCategory(file_data, category.id);
    }

    handleEditProductSubmit = (id) => {
        console.log(id);
        const { product_edit_name, product_edit_price, product_edit_brand, product_edit_measurements, product_edit_description, product_edit_detail_1, product_edit_detail_2, product_edit_detail_3, product_edit_detail_4, product_edit_detail_5 } = this.state;
        let file_data = new FormData();
        file_data.append("name", product_edit_name);
        file_data.append("brand", product_edit_brand);
        file_data.append("price", product_edit_price);
        file_data.append("measurements", product_edit_measurements);
        file_data.append("description", product_edit_description);
        file_data.append("detail_1", product_edit_detail_1);
        file_data.append("detail_2", product_edit_detail_2);
        file_data.append("detail_3", product_edit_detail_3);
        file_data.append("detail_4", product_edit_detail_4);
        file_data.append("detail_5", product_edit_detail_5);
        const { editProductDetail } = this.props;
        editProductDetail(file_data, id);
    }



    show_create_Shop_form = () => {
        const { show_new_shop_flag } = this.state;
        this.setState({
            show_new_shop_flag: !show_new_shop_flag
        });
    }

    show_edit_Shop_form = () => {
        const { edit_shop_flag } = this.state;
        this.setState({
            edit_shop_flag: !edit_shop_flag
        });
    }

    show_edit_Category_form = (category) => {
        const { edit_category_flag } = this.state;
        this.setState({
            edit_category_flag: !edit_category_flag,
            category: category
        });
    }

    show_delete_shop_dialog = () => {
        const { show_delete_dialog_flag } = this.state;
        var flag = !show_delete_dialog_flag;
        this.setState({
            show_delete_dialog_flag: flag
        });
    }

    show_delete_category_dialog = (category) => {
        const { show_delete_category_dialog_flag } = this.state;
        var flag = !show_delete_category_dialog_flag;
        this.setState({
            show_delete_category_dialog_flag: flag,
            category: category
        });
    }

    show_create_category_form = () => {
        const { create_category_flag } = this.state;
        var flag = !create_category_flag;
        this.setState({
            create_category_flag: flag
        });
    }

    showAddProductForm = (id) => {
        const { addProductFlag } = this.state;
        this.setState({
            addProductFlag: !addProductFlag,
            clicked_category_id: id,
        });
    }

    show_delete_product_dialog = (product) => {
        const { show_delete_product_dialog_flag } = this.state;
        this.setState({
            show_delete_product_dialog_flag: !show_delete_product_dialog_flag,
            product: product,
        });
    }

    showEditProductForm = (product) => {
        const { show_edit_product_flag } = this.state;
        this.setState({
            show_edit_product_flag: !show_edit_product_flag,
            product: product,
        });
    }

    render() {
        const { name_category_edit, show_edit_product_flag, product, description_category_edit, show_delete_product_dialog_flag, icon_file_category_edit, files, category, show_new_shop_flag, show_delete_dialog_flag, edit_category_flag, show_delete_category_dialog_flag, addProductFlag, create_category_flag, edit_shop_flag, name, address, email, tel1, tel2, brief, description, brand, dimensions } = this.state;
        const owns_shop = sessionStorage.getItem('shop_owner');
        const mystyle = show_new_shop_flag ? { display: 'block' } : { display: 'none' };
        const editShopStyle = edit_shop_flag ? { display: 'block' } : { display: 'none' };
        const editCategoryStyle = edit_category_flag ? { display: 'block' } : { display: 'none' };
        const addProductStyle = addProductFlag ? { display: 'block' } : { display: 'none' };
        const createCategoryStyle = create_category_flag ? { display: 'block' } : { display: 'none' };
        const deleteShopDialogStyle = show_delete_dialog_flag ? { display: 'block' } : { display: 'none' };
        const deleteCategorypDialogStyle = show_delete_category_dialog_flag ? { display: 'block' } : { display: 'none' };
        const deleteProductDialogStyle = show_delete_product_dialog_flag ? { display: 'block' } : { display: 'none' };
        const editProductStyle = show_edit_product_flag ? { display: 'block' } : { display: 'none' };
        var { shop } = this.props.shopDetailReducer;
        if (shop) {
            this.getAllShopProduct()
        }
        const { categories } = this.props.getAllCategoriesReducer;
        const { shop_products } = this.props.getAllShopProductsReducer;



        return (
            <div>
                <br /><br /><br />

                <div className="content-container">
                    {(parseInt(owns_shop) === 0) ? (<button className="shop-detail-button color-blue" onClick={this.show_create_Shop_form}><img className="shop-card-button-image" src={create_img} alt="" /><span className="text-inside-button">Create New Shop</span></button>) : ''}
                </div>
                <div className="content-container">
                    {(parseInt(owns_shop) === 1) ? (
                        <div>
                            {
                                shop ? (
                                    <div>
                                        <div className="shop-card">
                                            <h2>{shop.shop.name} </h2>
                                            <p>Telephone 1: <span className="shop-detail">{shop.shop.telephone_1}</span></p>
                                            <p>Telephone 2: <span className="shop-detail">{shop.shop.telephone_2}</span></p>
                                            <p>Email: <span className="shop-detail">{shop.shop.email}</span></p>
                                            <p>Address: <span className="shop-detail">{shop.shop.address}</span></p>
                                            <p>Brief: <span className="shop-detail">{shop.shop.short_brief}</span></p>
                                            <p>Description: <span className="shop-detail">{shop.shop.description}</span></p>
                                            <br />
                                            <div className="shop-card-action-row"><button className="shop-detail-button color-blue" onClick={this.show_edit_Shop_form} ><img className="shop-card-button-image" src={edit} alt="" /> Edit</button>&nbsp;<button onClick={this.show_delete_shop_dialog} className="shop-detail-button red-color"><img className="shop-card-button-image" src={delete_img} alt="" /> Delete</button></div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="shop-card">
                                            <h2>Categories</h2>
                                            <br />
                                            <div className="shop-card-action-row"><button className="shop-detail-button color-blue" onClick={this.show_create_category_form} ><img className="shop-card-button-image" src={edit} alt="" /> Add New Category</button></div>
                                            <br />
                                            {categories ? categories.map(element => <div key={element.id} className="w3-card-4 category-card-admin">
                                                <img className="admin-category-image" src={element.icon_url} alt="" />
                                                <div className="w3-container w3-center">
                                                    <p className="full-width">{element.name}</p>
                                                    <div className="shop-card-action-row"><button onClick={() => this.showAddProductForm(element.id)} className="category-option"><img src={add} alt="add" /></button>&nbsp;<button onClick={() => this.show_edit_Category_form(element)} className="category-option"><img src={edit} alt="edit" /></button>&nbsp;<button onClick={() => this.show_delete_category_dialog(element)} className="category-option"><img src={delete_img} alt="delete" /></button></div>
                                                </div>

                                            </div>) : ''}

                                            <br /><br />
                                        </div>

                                        <div className="shop-card">
                                            <h2>{shop.shop.name} Products</h2>
                                            <div className="quantity">
                                                {shop_products ? (<ProductsComponent products={shop_products ? shop_products : ''} showEditProductForm={this.showEditProductForm} editProductStyle={this.editProductStyle} handleDeleteProduct={this.show_delete_product_dialog} />) : ''}
                                            </div>
                                        </div>

                                    </div>
                                ) : ''
                            }

                        </div>) : ''}
                </div>

                <NewShopComponent
                    show_style={mystyle}
                    onInputChange={this.onInputChange}
                    handleSubmit={this.handleCreateShopSubmit}
                    show_create_Shop_form={this.show_create_Shop_form}
                    name={name}
                    address={address}
                    email={email}
                    tel1={tel1}
                    tel2={tel2}
                    brief={brief}
                    description={description}
                />

                <EditShopComponent
                    show_style={editShopStyle}
                    onInputChange={this.onInputChange}
                    handleEditShopSubmit={this.handleEditShopSubmit}
                    show_edit_Shop_form={this.show_edit_Shop_form}
                    name={name}
                    address={address}
                    email={email}
                    tel1={tel1}
                    tel2={tel2}
                    brief={brief}
                    description={description}
                    shop_detail={shop ? shop : {}}
                />

                <EditCategoryComponent
                    show_style={editCategoryStyle}
                    onInputChange={this.onInputChange}
                    onFileChange={this.onFileChange}
                    handleEditCategorySubmit={this.handleEditCategorySubmit}
                    show_edit_Category_form={this.show_edit_Category_form}
                    name_category_edit={name_category_edit}
                    description_category_edit={description_category_edit}
                    icon_file_category_edit={icon_file_category_edit}
                    category={category ? category : {}}
                />

                <DeleteShopDialogComponent
                    show_style={deleteShopDialogStyle}
                    show_delete_Shop_dialog={this.show_delete_shop_dialog}
                    shop={shop ? shop : {}}
                    deleteUserShop={this.deleteUserShop}
                />

                <DeleteCategoryDialogComponent
                    show_style={deleteCategorypDialogStyle}
                    show_delete_category_dialog={this.show_delete_category_dialog}
                    category={category ? category : {}}
                    deleteShopCategory={this.deleteShopCategory}
                />

                <NewProductComponent
                    show_style={addProductStyle}
                    showAddProductForm={this.showAddProductForm}
                    onInputChange={this.onInputChange}
                    onFileChange={this.onFileChange}
                    handleNewProductSubmit={this.handleNewProductSubmit}
                    name={name}
                    brand={brand}
                    dimensions={dimensions}
                />

                <NewCategoryComponent
                    show_style={createCategoryStyle}
                    onInputChange={this.onInputChange}
                    onFileChange={this.onFileChange}
                    name={name}
                    description={description}
                    files={files}
                    handleNewCategorySubmit={this.handleNewCategorySubmit}
                    show_create_category_form={this.show_create_category_form}
                />

                {/* <DeleteCategoryDialogComponent
                    show_style={deleteProductDialogStyle}
                    show_delete_product_dialog={this.show_delete_product_dialog}
                    product={product ? product : {}}
                    deleteProductCategory={()=>{}}
                /> */}

                <DeleteProductDialogComponent
                    show_style={deleteProductDialogStyle}
                    show_delete_product_dialog={this.show_delete_product_dialog}
                    product={product ? product : {}}
                    handleDeleteProduct={this.deleteShopProduct}
                />

                <EditProductComponent
                    show_style={editProductStyle}
                    product={product}
                    showEditProductForm={this.showEditProductForm}
                    onInputChange={this.onInputChange}
                    onFileChange={this.onFileChange}
                    handleEditProductSubmit={this.handleEditProductSubmit}
                />

                <WhyBirungi />
            </div>
        );
    }
}

ControlPanel.propTypes = {
    createShop: PropTypes.func.isRequired,
    getShopDetail: PropTypes.func.isRequired,
    editShopDetail: PropTypes.func.isRequired,
    deleteShop: PropTypes.func.isRequired,
    getCategories: PropTypes.func.isRequired,
    deleteCategory: PropTypes.func.isRequired,
    addProduct: PropTypes.func.isRequired,
    editCategory: PropTypes.func.isRequired,
    getShopProducts: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
    createShopReducer: state.createShopReducer,
    shopDetailReducer: state.getShopDetailReducer,
    getAllCategoriesReducer: state.getAllCategoriesReducer,
    getAllShopProductsReducer: state.getAllShopProductsReducer,
});

export default connect(mapStateToProps, {
    createShop: createShopAction,
    addProduct: createProductAction,
    getShopDetail: getShopDetailAction,
    editShopDetail: editShopAction,
    deleteShop: deleteShopAction,
    deleteCategory: deleteCategoryAction,
    deleteProductAction: deleteProductAction,
    createCategory: createCategoryAction,
    getCategories: getAllCategoriesAction,
    editCategory: editCategoryAction,
    getShopProducts: getAllShopProductsAction,
    editProductDetail: editProductAction,
})(ControlPanel);
