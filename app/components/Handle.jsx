import React,{Component} from 'react';

class Handle extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }
    render() {
        return (
            <div>
            
                        <a className="waves-effect waves-light btn orange">放弃</a>
                        <a className="waves-effect waves-light btn Small grey darken-1" id="empty">清空</a>
                        <a className="waves-effect waves-light btn light-blue" id="save">另存为</a>
                        <a className="waves-effect waves-light btn btn-small green">保存</a>
                    
            </div>
);
    }
}

export default Handle;
