import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import history from './utils/history';
import landingPageComponent from './components/landingPageComponent';
import NavBar from './components/common/navBar';
import Footer from './components/common/footer';
import ProductComponent from './components/productComponent';
import ProductDetailComponent from './components/productDetailComponent';
import cartComponent from './components/cartComponent';
import ControlPanel from './components/controlPanel';
import AuthComponent from './components/AuthComponent';

function Routes() {
  return (
    <Router history={history}>
    <NavBar />
      <Switch>
        <Route exact path="/" component={landingPageComponent} />
        <Route exact path="/cart" component={cartComponent} />
        <Route exact path="/products" component={ProductComponent} />
        <Route exact path="/product-detail/:id" component={ProductDetailComponent} />
        <Route exact path="/control-panel" component={ControlPanel} />
        <Route exact path="/admin/auth" component={AuthComponent} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
