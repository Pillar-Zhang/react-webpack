import React,{Component} from 'react';
import MyCoursewareImage from'./MyCoursewareComponent/MyCoursewareImage.jsx'
import MyCoursewareText from'./MyCoursewareComponent/MyCoursewareText.jsx'

class MyCourseware extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MyCourseware';
    }
    render() {
        return (
			        <div>
			        	<MyCoursewareImage />
                        <MyCoursewareText />
			        </div>
        )
    }
}

export default MyCourseware;
