import React,{Component} from 'react';
import MyCoursewareImage from'./MyCoursewareComponent/MyCoursewareImage.jsx'

class MyCourseware extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MyCourseware';
    }
    render() {
        return (
			        <div>
			        	<MyCoursewareImage />
			        </div>
        )
    }
}

export default MyCourseware;
