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
import DeleteShopDialogComponent from './dialog-boxes/deleteShop';
import deleteCategoryAction from '../actions/deleteCategoryAction'
import createShopAction from '../actions/createShopAction';
import getShopDetailAction from '../actions/getShopDetailAction';
import getAllCategoriesAction from '../actions/getAllCategoriesAction';
import editShopAction from '../actions/editShopAction';
import createCategoryAction from '../actions/createCategoryAction';
import edit from '../assets/images/svg/edit.svg';
import delete_img from '../assets/images/svg/delete.svg';
import create_img from '../assets/images/svg/design.svg';
import add from '../assets/images/plus.png'
import deleteShopAction from '../actions/deleteShopAction';
import { toastFailure } from '../utils/toast'

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryOptionChosen: false,
            productOptionChosen: false,
            show_new_shop_flag: false,
            show_delete_dialog_flag: false,
            showDeleteCategoryDialogFlag: false,
            edit_shop_flag: false,
            create_category_flag: false,
            addProductFlag: false,
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
            file_data: new FormData()
        }
    }

    componentDidMount() {
        if (parseInt(sessionStorage.getItem('shop_owner')) === 1) {
            this.getShopDetails();
            this.getAllCategories();
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onFileChange = (e) => {
        const files = Array.from(e.target.files)
        const formData = new FormData()

        files.forEach((file, i) => {
            formData.append(i, file)
        })
        this.setState({
            file_data: formData
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
        const { file_data, name, description } = this.state;
        if (file_data.values()) {
            file_data.append("name", name);
            file_data.append("description", description);
            file_data.append("icon_file", file_data.get('0'));
            file_data.delete('0')
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
        const { name, brand, dimensions } = this.state;
        const productInfo = {name, brand, dimensions};
        console.log(productInfo);

    }


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


    show_create_Shop_form = () => {
        const { show_new_shop_flag } = this.state;
        var flag = !show_new_shop_flag;
        this.setState({
            show_new_shop_flag: flag
        });
    }

    show_edit_Shop_form = () => {
        const { edit_shop_flag } = this.state;
        var flag = !edit_shop_flag;
        this.setState({
            edit_shop_flag: flag
        });
    }


    show_delete_shop_dialog = () => {
        const { show_delete_dialog_flag } = this.state;
        var flag = !show_delete_dialog_flag;
        this.setState({
            show_delete_dialog_flag: flag
        });
    }


    show_edit_Shop_form = () => {
        const { edit_shop_flag } = this.state;
        var flag = !edit_shop_flag;
        this.setState({
            edit_shop_flag: flag
        });
    }

    show_create_category_form = () => {
        const { create_category_flag } = this.state;
        var flag = !create_category_flag;
        this.setState({
            create_category_flag: flag
        });
    }

    showAddProductForm = () => {
        const { addProductFlag } = this.state;
        this.setState({
            addProductFlag: !addProductFlag
        });
    }

    render() {
        const { id, files, show_new_shop_flag, show_delete_dialog_flag, addProductFlag, create_category_flag, edit_shop_flag, name, address, email, tel1, tel2, brief, description, brand, dimensions } = this.state;
        const owns_shop = sessionStorage.getItem('shop_owner');
        const mystyle = show_new_shop_flag ? { display: 'block' } : { display: 'none' };
        const editShopStyle = edit_shop_flag ? { display: 'block' } : { display: 'none' };
        const addProductStyle = addProductFlag ? { display: 'block' } : { display: 'none' };
        const createCategoryStyle = create_category_flag ? { display: 'block' } : { display: 'none' };
        const deleteShopDialogStyle = show_delete_dialog_flag ? { display: 'block' } : { display: 'none' };
        var { shop } = this.props.shopDetailReducer;
        const { categories } = this.props.getAllCategoriesReducer;

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
                                                <img className="admin-category-image" src={element.icon_url} />
                                                <div className="w3-container w3-center">
                                                    <p className="full-width">{element.name}</p>   
                                                    <div className="shop-card-action-row"><button onClick={this.showAddProductForm} className="category-option"><img src={add} alt="add"/></button>&nbsp;<button className="category-option"><img src={edit} alt="Edit"/></button>&nbsp;<button className="category-option"><img src={delete_img} alt="add"/></button></div>     
                                                </div>
                                                
                                            </div>) : ''}
                                            
                                            <br /><br />
                                        </div>

                                        <div className="shop-card">
                                            <h2>{shop.shop.name} Products</h2>
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

                <DeleteShopDialogComponent
                    show_style={deleteShopDialogStyle}
                    show_delete_Shop_dialog={this.show_delete_shop_dialog}
                    shop={shop ? shop : {}}
                    deleteUserShop={this.deleteUserShop}
                />

                <NewProductComponent
                    show_style={addProductStyle}
                    showAddProductForm={this.showAddProductForm}
                    onInputChange={this.onInputChange}
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
};

export const mapStateToProps = state => ({
    createShopReducer: state.createShopReducer,
    shopDetailReducer: state.getShopDetailReducer,
    getAllCategoriesReducer: state.getAllCategoriesReducer,
});

export default connect(mapStateToProps, {
    createShop: createShopAction,
    getShopDetail: getShopDetailAction,
    editShopDetail: editShopAction,
    deleteShop: deleteShopAction,
    deleteCategory: deleteCategoryAction,
    createCategory: createCategoryAction,
    getCategories: getAllCategoriesAction,
})(ControlPanel);
