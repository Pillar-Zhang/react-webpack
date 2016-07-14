import React,{Component} from 'react';
import '../css/SideLeft.scss';


class SideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideLeft';
    }
    render() {
        return (
        <div className="side-left">
            <ul id="nav-mobile" className="side-nav z-depth-2 fixed" style={{transform: 'translateX(0%)'}}>
                <li className="bold"><a href="#" className="waves-effect waves-teal"><b>INITATION </b><b>启蒙</b></a></li>
                <li className="bold active"><a href="#" className="waves-effect waves-teal"><b>工具1</b></a></li>
                <li className="bold"><a href="#" className="waves-effect waves-teal"><b>工具2</b></a></li>
                <li className="bold"><a href="#" className="waves-effect waves-teal"><b>工具3</b></a></li>
                <li className="bold"><a href="#" className="waves-effect waves-teal"><b>INSPIRATION </b><b>灵感</b></a></li>
                <li className="bold"><a href="#" className="waves-effect waves-teal"><b>IDEATION </b><b>构思</b></a></li>
                <li className="bold"><a href="#" className="waves-effect waves-teal"><b>IMPATION </b><b>实现</b></a></li>
            </ul>
        </div>




        	)
    }
}

export default SideLeft;
