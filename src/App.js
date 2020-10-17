import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from './components/organisms/Container';
import Footer from './components/organisms/Footer';
import Nav from './components/organisms/Nav';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Product from './components/pages/Product';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Container>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products/:product' component={Product} />
          <Route exact path='/contact-us' component={Contact} />
        </Container>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App;
