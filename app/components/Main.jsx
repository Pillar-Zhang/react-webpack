import React,{Component} from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Temporary from './Temporary.jsx';
import '../css/main.scss';


class Main extends React.Component {
  render() {
    return (
    	<div>
                <div className="container">
    		<div className="row">
    			<div className="col m-10">
    				<Header />
    				<Content />
    			</div>
    			<div className="col m-2 border">
    				<Temporary />
    			</div>
    		</div>
                </div>
    	</div>
    );
  }
}

export default Main;