import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUserAction } from '../../actions/registerAction'
import Loading from '../common/loading'

class RegisterPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            address: '',
            phonenumber: '',
            password: '',
            confirm_password: '',
        };
        this._isMounted = false;
    }

    onInputChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, phonenumber, address, email, confirm_password, password } = this.state;
        const registerInfo = {
            name,
            phonenumber,
            email,
            password,
            address,
            confirm_password
        };
        const { registerAction } = this.props;
        if(password === confirm_password){
            registerAction(registerInfo);
        }
        this.handleClearForm();
    }


    handleClearForm() {
        this.setState({
            email: '',
            password: '',
        });
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


    render() {
        var { name, address, phonenumber, confirm_password, email, password, loader_on } = this.state
        const { loader_off } = this.props.loginReducer;
        var load_flag;

        if (loader_on === true) {
            load_flag = true;
            if (loader_off === true) {
                load_flag = false;
            }
        }

        return (
            <div>
                <div className="create_new">
                    <h4>Sign in</h4>
                    {load_flag ? <Loading /> : (
                        <form className="modal-content animate" onSubmit={this.handleSubmit}>
                            <br />
                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                id="name"
                                value={name}
                                onChange={this.onInputChange}
                                required />
                            <input
                                name="phonenumber"
                                type="text"
                                placeholder="Mobile Phone"
                                id="phonenumber"
                                value={phonenumber}
                                onChange={this.onInputChange}
                                required />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                id="email"
                                value={email}
                                onChange={this.onInputChange}
                                required />
                            <input
                                name="address"
                                type="text"
                                placeholder="Address"
                                id="address"
                                value={address}
                                onChange={this.onInputChange}
                                required />
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.onInputChange}
                                id="password"
                                required />
                            <input
                                name="confirm_password"
                                type="password"
                                placeholder="Confirm Password"
                                value={confirm_password}
                                onChange={this.onInputChange}
                                id="change_password"
                                required />
                            <button
                                className="login_button"
                                type="submit">
                                REGISTER
                        </button>
                        </form>
                    )}
                    <br />
                </div>
            </div>
        )
    }
}


RegisterPanel.propTypes = {
    registerAction: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
    loginReducer: state.loginReducer,
});

export default connect(mapStateToProps, { registerAction: registerUserAction })(RegisterPanel);
