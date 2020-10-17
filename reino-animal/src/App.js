import React from 'react';
import { Navbar } from './components';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';

const App = () => {
  return (
    <Router>
      <GlobalStyle></GlobalStyle>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;