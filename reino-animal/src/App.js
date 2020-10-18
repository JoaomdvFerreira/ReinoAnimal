import React from 'react';
import { Footer, Navbar } from './components';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Services from './pages/ServicesPage/Services';
import Products from './pages/ProductsPage/Products';
import Contacts from './pages/ContactsPage/Contacts';
import Signup from './pages/SignupPage/Signup';

const App = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/products" exact component={Products} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/products" exact component={Products} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;