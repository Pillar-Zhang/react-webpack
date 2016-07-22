import React,{Component} from 'react';
import {md2} from '../js/md2.js';

class Mdview extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Mdview';
        this.state = {content:""}
    }

    componentWillMount() {
        
             let converter = new showdown.Converter();
            this.setState({content:converter.makeHtml(md2)})
            
        }

    render() {
        return <div>
        		<Mdview>{{__html:this.state.content}}</Mdview>

        	   </div>;
    }
}

export default Mdview;
