import React from 'react';

class Temporary extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Temporary';
    }
    render() {
        return <div className='temporary'>Temporary</div>;
    }
}

export default Temporary;
