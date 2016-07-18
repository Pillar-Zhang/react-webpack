import React from 'react';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Test';
    }

handleOptionButtonClick=(e)=>{
	this.setState({showOptionsModal:true})
}


    render() {
        return <div>Test</div>;
    }
}

export default Test;
