import React from 'react';
import '../css/SideRight.scss';

class SideRight extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideRight';
    }
    imgonclick(){

                $('#modal1').openModal(); 
    }
    render() {
        return (
        	<div className="side-right">
	          <ul id="nav-right" className="side-nav z-depth-2 fixed right-aligned">
	            <li><h5>课程课件</h5></li>
				<li className="bold"><img className="modalimg" width="140" src="./images/1.png" onClick={e=>this.imgonclick()}/><span>1.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/2.png" onClick={e=>this.imgonclick()}/><span>2.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/3.png" onClick={e=>this.imgonclick()}/><span>3.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/4.png" onClick={e=>this.imgonclick()}/><span>4.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/5.png" onClick={e=>this.imgonclick()}/><span>5.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/6.png" onClick={e=>this.imgonclick()}/><span>6.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/7.png" onClick={e=>this.imgonclick()}/><span>7.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/8.png" onClick={e=>this.imgonclick()}/><span>8.</span></li>
	          </ul>


	          <div id="modal1" className="modal modalopen">
			    <div className="modal-content">
			      <h4>提示</h4>
			      <p>你要投放出去么？</p>
			      <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">同意</a>
			      <a href="#!" className=" modal-action modal-close waves-effect waves-red btn-flat">不，谢谢</a>
			    </div>
			</div>

			</div>


        	)
    }
}

export default SideRight;
