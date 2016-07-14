import React from 'react';
import '../css/MainContent.scss';




class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainContent';
    }
    render() {
        return (

        		<div className="main z-depth-4">
            <div className="row">
                <div className="col m10">
                    <h3 className="title">介绍城市故事</h3>
                    <div class="embed-responsive embed-responsive-16by9">
                      <iframe width ="830"  height="730" class="embed-responsive-item iframesize" src="http://materializecss.com/"></iframe>
                    </div>
                </div>
                <div className="col m2">
                
                </div>
            </div>
        </div>


        	)
    }
}

export default MainContent;
