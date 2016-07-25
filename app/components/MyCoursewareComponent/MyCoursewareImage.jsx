import React,{Component} from 'react';

class MyCoursewareImage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MyCoursewareImage';
    }
    render() {
        return (
        	<div className="MyCoursewareImage">
        		<div className="container">
        			<div className="row">
        				<div className="col m6">
        					<img className="modalimg" width="400" src="./images/sample-1.jpg" />
        				</div>
        				<div className="col m6">
        					<img className="modalimg" width="400" src="./images/sample-1.jpg" />
        				</div>
        			</div>
        		</div>
        			
        			
        	</div>
        		)
    }
}

export default MyCoursewareImage;
