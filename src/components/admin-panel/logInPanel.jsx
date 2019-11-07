import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUserAction, reset_loader } from '../../actions/loginAction'
import Loading from '../common/loading'

class LoginPanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loader_on: false,
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
    this.setState({ loader_on: true });
    const { email, password } = this.state;
    const loginInfo = {
      email,
      password,
    };
    const { loginAction } = this.props;

    loginAction(loginInfo);
    this.handleClearForm();
  }

  switchOffLoader = () => {
    this.setState({ loader_on: false });
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
    var { email, password, loader_on } = this.state
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
                name="email"
                type="email"
                placeholder="Business Email"
                id="email"
                value={email}
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
              <button
                className="login_button"
                type="submit">
                LOGIN
                        </button>
            </form>
          )}
          <br />
        </div>
      </div>
    )
  }
}


LoginPanel.propTypes = {
  loginAction: PropTypes.func.isRequired,
  resetLoader: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  loginReducer: state.loginReducer,
});

export default connect(mapStateToProps, { loginAction: loginUserAction, resetLoader: reset_loader })(LoginPanel);
