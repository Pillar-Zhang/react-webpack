import React from 'react';
import '../css/SideRight.scss';

class SideRight extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideRight';
    }
    render() {
        return (
        	<div className="side-right">
	          <ul id="nav-right" className="side-nav z-depth-2 fixed right-aligned">
	            <li>
	                <h4>课程课件</h4></li>
	            <li className="bold">


	            	<div className="card">
					    <span>1.</span>
					      <img className="activator" width="160" src="./images/sample-1.jpg" />
					 
					    <div className="card-reveal">
					      <span className="card-title blue-text text-darken-5 powerputin">确定要投放么？</span>
					      <i className="material-icons light-green left">done</i><i className="material-icons deep-orange right powerputin">close</i>
					    </div>
					</div>

	            </li>
	            <li className="bold"><img className="materialboxed" width="160" src="./images/sample-1.jpg" /><span>2.</span></li>
	            <li className="bold"><img className="materialboxed" width="160" src="./images/sample-1.jpg" /><span>3.</span></li>
	            <li className="bold"><img className="materialboxed" width="160" src="./images/sample-1.jpg" /><span>4.</span></li>
	            <li className="bold"><img className="materialboxed" width="160" src="./images/sample-1.jpg" /><span>5.</span></li>
	            <li className="bold"><img className="materialboxed" width="160" src="./images/sample-1.jpg" /><span>6.</span></li>
	            <li className="bold paddingbottom"><img className="materialboxed" width="160" src="./images/sample-1.jpg" /><span>7.</span></li>
	          </ul>
			</div>


        	)
    }
}

export default SideRight;
