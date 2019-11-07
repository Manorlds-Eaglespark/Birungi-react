import React, { Component } from 'react'
import '../assets/css/styles.css'
import WhyBirungi from './common/whyBirungi'
import LoginPanel from './admin-panel/logInPanel'
import RegisterPanel from './admin-panel/registerPanel'

export default class ControlPanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            loginOptionChosen: false,
            registerOptionChosen: false
        }
    }

    logInUser = () => {
        this.resetOptions()
        this.setState({loginOptionChosen: true});
    }

    registerUser = () => {
        this.resetOptions()
        this.setState({registerOptionChosen: true});
    }

    resetOptions = () => {
        this.setState(
            {
                loginOptionChosen: false, 
                registerOptionChosen: false
            }
        );
    }
    render() {
        const {loginOptionChosen, registerOptionChosen} = this.state;
        return (
            <div>
                <div className="content-container">
                    <ul> 
                        <li><button className="categoryButton" onClick={e => this.logInUser()} > Login </button></li>
                        <li><button className="categoryButton" onClick={e => this.registerUser()} > Register </button></li>
                        </ul>
                    <hr className="lightseagreen-background"/>
                    <div className="category-header">Admin Panel</div>
                    <br /><br /><br />
                    { loginOptionChosen ? <LoginPanel /> : ''}
                    { registerOptionChosen ? <RegisterPanel /> : ''}
                </div>
                <WhyBirungi />
            </div>
        )
    }
}
