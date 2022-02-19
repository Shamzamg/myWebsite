import React from 'react';
import { Helmet } from 'react-helmet'
import {Container, Grid} from '@material-ui/core';

import Profile from './components/Profile/Profile';
import Contact from './pages/Contact/Contact';
import Header from './components/Header/Header';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import Footer from './components/Footer/Footer';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Container className='top_60'>
      <Helmet>
        <title>{'Resume - Shamsdine ZIANI'}</title>
      </Helmet>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />
            <div className='main_content container_shadow'>
              <Switch>
                <Route path='/Portfolio'>
                  <Portfolio />
                </Route>
                <Route path='/Contact'>
                  <Contact />
                </Route>
                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
