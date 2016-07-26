import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from 'bootstrap'
//引入material-ui和React的配置文件
import $ from 'jquery';
import bootstrap from 'bootstrap'
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize/css/materialize.min.css';
import './css/swiper.min.css'
//js
import 'materialize/js/materialize.min.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
//jsx
import MyCourseware from './components/MyCourseware.jsx';
import './css/MyCourseware/MyCourseware.scss';
injectTapEventPlugin();



ReactDOM.render(
	<MyCourseware />, document.getElementById('APP')
);