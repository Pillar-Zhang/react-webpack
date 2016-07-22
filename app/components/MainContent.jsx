import React from 'react';
import '../css/MainContent.scss';
import showdown from '../js/showdown.js';
import {md} from '../js/md.js';




class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainContent';
        this.state = {content:""}
        

    }
    componentWillMount() {
        
             let converter = new showdown.Converter();
            this.setState({content:converter.makeHtml(md)})
            
        }


    render() {
        return (
    <div className="main">
        
            <div dangerouslySetInnerHTML={{__html:this.state.content}} className="main-nody z-depth-4 ">
            
        </div>
    </div>

        	)
    }
}

export default MainContent;

