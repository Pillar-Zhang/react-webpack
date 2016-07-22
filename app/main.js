import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap'
//引入material-ui和React的配置文件
import $ from 'jquery';
import bootstrap from 'bootstrap'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize/css/materialize.min.css';
import 'materialize-tags/dist/css/materialize-tags.min.css';
import './css/swiper.min.css'
//js
import 'materialize/js/materialize.min.js';
import 'materialize-tags/dist/js/materialize-tags.min.js';
import './js/swiper.jquery.min.js'
import './js/index.js'
import injectTapEventPlugin from 'react-tap-event-plugin';

//jsx
import Main from './components/Main.jsx';

injectTapEventPlugin();



ReactDOM.render(
	<Main />, document.getElementById('Main')
);