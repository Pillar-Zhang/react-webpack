import React from 'react';
import '../css/MainContent.scss';
import showdown from '../js/showdown.js'




class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MainContent';
        this.state = {content:""}
        let converter = new showdown.Converter();

        fetch('md.md').then(res=>res.text()).then(text=>{
            this.setState({content:converter.makeHtml(text)})
            
        })
    }
    render() {
        return (
    <div className="main">
        <div dangerouslySetInnerHTML={{__html:this.state.content}} className="main-nody z-depth-4">
          
        </div>
    </div>

        	)
    }
}

export default MainContent;
