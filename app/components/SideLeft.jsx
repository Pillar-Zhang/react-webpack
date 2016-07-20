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
                <li className="bold navleftpadingtop"><a href="#" className="waves-effect Default"><span className="awidth">INITATION</span><span className="spanpadleft"><b>启蒙</b></span></a></li>
                <li className="bold"><a href="#" className="waves-effect Default"><span className="spanpadleft alineheight"><b>章节一</b></span></a></li>
                <li className="bold"><a href="#" className="waves-effect Default"><span className="spanpadleft alineheight"><b>章节二</b></span></a></li>
                <li className="bold"><a href="#" className="waves-effect Default"><span className="spanpadleft alineheight"><b>章节三</b></span></a></li>
                <li className="bold"><a href="#" className="waves-effect Default"><span className="awidth">INSPIRATION</span><span className="spanpadleft"><b>灵感</b></span></a></li>
                <li className="bold"><a href="#" className="waves-effect Default"><span className="awidth">IDEATION</span><span className="spanpadleft"><b>构思</b></span></a></li>
                <li className="bold"><a href="#" className="waves-effect Default"><span className="awidth">IMPATION</span><span className="spanpadleft"><b>实现</b></span></a></li>
            </ul>
        </div>




        	)
    }
}

export default SideLeft;
