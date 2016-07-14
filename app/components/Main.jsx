import React,{Component} from 'react';
import Header from './Header.jsx';
import SideLeft from './SideLeft.jsx';
import MainContent from './MainContent.jsx';
import Stopwatch from './Stopwatch.jsx';
import SideRight from './SideRight.jsx';
import '../css/style.scss';


class Main extends React.Component {
  render() {
    return (
    	<div>
                <Header />
                <Stopwatch />
                <SideLeft />
                <MainContent />
                <SideRight />
    	</div>
    );
  }
}

export default Main;