import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import i18n from 'meteor/universe:i18n';

// route components
import HomePage from './components/Home.js';
import AboutPage from './components/About.js';
import ContactPage from './components/Contact.js';

import Items from './components/Items.js';
import Item from './components/Item.js';


export const renderRoutes = () => (
   <Router history={browserHistory}>
        <Route path="/" component={HomePage}></Route>
        <Route path="/about" component={AboutPage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/items" component={Items}>
            <Route path="/item/:itemId" component={Item}/>
        </Route>
    </Router>
);
