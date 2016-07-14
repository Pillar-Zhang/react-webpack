import React from 'react';
import '../css/HeaderStyle.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return (
    <header className="header z-depth-1">
	        <i className="material-icons">keyboard_arrow_left</i>
	        <a href="#" className="return">返回</a>
	        <b className="desing">DESIGN THINKING</b>
        
    </header>)
    }
}

export default Header;
