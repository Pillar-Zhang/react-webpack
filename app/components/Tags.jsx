import React,{Component} from 'react';




class Tags extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Tags';
    }
    render() {
        return <div>
        	<input type="text" value="Tags1,Tags2,Tags3,Tags4,Tags5"data-role="materialtags" />
        </div>;
    }
}

export default Tags;
