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
                        <h5>创狐课件</h5>
        				<div className="col m6">
        					<img className="modalimg" width="500" src="./images/MyCoursewareimg-1.png" />
        				</div>
        				<div className="col m6">
        					<img className="modalimg" width="500" src="./images/MyCoursewareimg-3.png" />
        				</div>
        			</div>
        		</div>
        			
        			
        	</div>
        		)
    }
}

export default MyCoursewareImage;
