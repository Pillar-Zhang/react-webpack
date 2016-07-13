import React,{Component} from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Content';
    }
    render() {
        return <div className=' col m-12 content border'>Content</div>;
    }
}

export default Content;
