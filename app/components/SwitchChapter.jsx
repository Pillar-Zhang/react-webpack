import React,{Component} from 'react';
import '../css/SwitchChapter.scss';

class SwitchChapter extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SwitchChapter';
    }
    render() {
        return (
        			<div className="switchchapter">
        				<a className="waves-effect  waves-light btn "><i className="mdi-file-cloud left"></i>上一章</a>
  						<a className="waves-effect  waves-light btn"><i className="mdi-file-cloud right"></i>下一章</a>
        			</div>


        	)
    }
}

export default SwitchChapter;
