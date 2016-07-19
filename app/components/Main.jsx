import React,{Component} from 'react';
import SideLeft from './SideLeft.jsx';
import MainContent from './MainContent.jsx';
import Stopwatch from './Stopwatch.jsx';
import SideRight from './SideRight.jsx';
import SwitchChapter from './SwitchChapter.jsx';
import '../css/style.scss';


class Main extends React.Component {
  render() {
    return (
    	<div> 
                <Stopwatch />
                <SideLeft />
                <MainContent />
                <SideRight />
                <SwitchChapter />
    	</div>
    );
  }
}

export default Main;