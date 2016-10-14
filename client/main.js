import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import { renderRoutes } from '../imports/routes.js';


import './main.html';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
