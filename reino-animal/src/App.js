import React from 'react';
import { Footer, Navbar, NotFound } from './components';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/ServicesPage/Services';
import Products from './pages/ProductsPage/Products';
import Contacts from './pages/ContactsPage/Contacts';
import Signup from './pages/SignupPage/Signup';
import Checkout from './pages/CheckoutPage/Checkout';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/products" exact component={Products} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/checkout" exact component={Checkout} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;