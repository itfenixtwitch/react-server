import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import * as serviceWorker from './setup/serviceWorker';

import { Layout } from 'antd';

import Nav from './components/Nav/Nav';
import App from './components/App/App'
import Lebensmittel from './components/Lebensmittel/Lebensmittel'

ReactDOM.render(
  <Layout>
    <Router>
      <Nav />
      <Layout.Content>
        <Route exact path="/" component={App} />
        <Route path="/lebensmittel" component={Lebensmittel} />
      </Layout.Content>
    </Router>
  </Layout>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
