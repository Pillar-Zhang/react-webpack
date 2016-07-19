import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap'
//引入material-ui和React的配置文件
import $ from 'jquery';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize/css/materialize.min.css';
import 'materialize/js/materialize.min.js';
import 'materialize-tags/dist/js/materialize-tags.min.js';
import 'materialize-tags/dist/css/materialize-tags.min.css';
import './js/fetch.js'
import './js/index.js'
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main.jsx';

injectTapEventPlugin();



ReactDOM.render(
	<Main />, document.getElementById('Main')
);