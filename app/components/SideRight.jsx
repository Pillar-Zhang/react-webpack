import React from 'react';
import '../css/SideRight.scss';

class SideRight extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideRight';
    }
    imgonclick(e){

                // $('#modal1').openModal(); 

                window.webkit.messageHandlers.PlayLocalPhoto.postMessage(e.target.src);
                
    }
    modal1onclick(e){
    			
                window.webkit.messageHandlers.PlayMDPhoto.postMessage(this.refs.imgsrc.attributes.imgName.value);
                
    }
    modal2onclick(e){
    			console.log('modal',this.refs.videosrc.attributes.videoName.value);
                window.webkit.messageHandlers.PlayLocalVideo.postMessage(this.refs.videosrc.attributes.videoName.value);
                
    }


    render() {
        return (
        	<div className="side-right ">
	          <ul id="nav-right" className="side-nav z-depth-2 fixed navimgright ">
	            <li><h5>课程课件</h5></li>
				<li className="bold"><img className="modalimg" width="140" src="./images/1.png" onClick={e=>this.imgonclick(e)}/><span>1.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/2.png" onClick={e=>this.imgonclick(e)}/><span>2.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/3.png" onClick={e=>this.imgonclick(e)}/><span>3.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/4.png" onClick={e=>this.imgonclick(e)}/><span>4.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/5.png" onClick={e=>this.imgonclick(e)}/><span>5.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/6.png" onClick={e=>this.imgonclick(e)}/><span>6.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/7.png" onClick={e=>this.imgonclick(e)}/><span>7.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/8.png" onClick={e=>this.imgonclick(e)}/><span>8.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/9.png" onClick={e=>this.imgonclick(e)}/><span>9.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/10.png" onClick={e=>this.imgonclick(e)}/><span>10.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/11.png" onClick={e=>this.imgonclick(e)}/><span>11.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/12.png" onClick={e=>this.imgonclick(e)}/><span>12.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/13.png" onClick={e=>this.imgonclick(e)}/><span>13.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/14.png" onClick={e=>this.imgonclick(e)}/><span>14.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/15.png" onClick={e=>this.imgonclick(e)}/><span>15.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/16.png" onClick={e=>this.imgonclick(e)}/><span>16.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/17.png" onClick={e=>this.imgonclick(e)}/><span>17.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/18.png" onClick={e=>this.imgonclick(e)}/><span>18.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/19.png" onClick={e=>this.imgonclick(e)}/><span>19.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/20.png" onClick={e=>this.imgonclick(e)}/><span>20.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/21.png" onClick={e=>this.imgonclick(e)}/><span>21.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/22.png" onClick={e=>this.imgonclick(e)}/><span>22.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/23.png" onClick={e=>this.imgonclick(e)}/><span>23.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/24.png" onClick={e=>this.imgonclick(e)}/><span>24.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/25.png" onClick={e=>this.imgonclick(e)}/><span>25.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/26.png" onClick={e=>this.imgonclick(e)}/><span>26.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/27.png" onClick={e=>this.imgonclick(e)}/><span>27.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/28.png" onClick={e=>this.imgonclick(e)}/><span>28.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/29.png" onClick={e=>this.imgonclick(e)}/><span>29.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/30.png" onClick={e=>this.imgonclick(e)}/><span>30.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/31.png" onClick={e=>this.imgonclick(e)}/><span>31.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/32.png" onClick={e=>this.imgonclick(e)}/><span>32.</span></li>
	            <li className="bold"><img className="modalimg" width="140" src="./images/33.png" onClick={e=>this.imgonclick(e)}/><span>33.</span></li>
	          </ul>


	          <div id="modal1" className="modal modalopen">
			    <div className="modal-content">
			      <h4>提示</h4>
			      <p>你要投放出去么？</p>
			      <a href="#!" ref='imgsrc' id="toufang" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={e=>this.modal1onclick(e)}>投放</a>
			    </div>
			</div>


			<div id="modal2" className="modal modalopen">
			    <div className="modal-content">
			      <h4>提示</h4>
			      <p>你要投放出去么？</p>
			      <a href="#!" ref='videosrc' id="toufangvideo" className=" modal-action modal-close waves-effect waves-green btn-flat" onClick={e=>this.modal2onclick(e)}>投放</a>
			    </div>
			</div>

			</div>


        	)
    }
}

export default SideRight;
