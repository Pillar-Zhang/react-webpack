import React,{ Component } from 'react';
import Title from './Title.jsx';
import Handle from './Handle.jsx';
import Tags from './Tags.jsx';
import headerStyle from '../css/HeaderStyle.scss';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
    }
    render() {
        return( 
             <div>   
     <div className="row">
    
    <div className="col m8 headerLeft">
        <Title promise={$.getJSON('http://192.168.1.130:8080/hifoxlab/tools/1')} />
        <Tags />

    </div>
    <div className="col m4 headerRight btnsize">
        <Handle />
    </div>
  </div>

        </div>
        );



    }
}


export default Header;
