import React,{Component} from 'react';
import '../css/SideLeft.scss';


class SideLeft extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideLeft';
    }
    
    render() {
        return (
        <div className="side-left">
            <aside id="nav-mobile" className="sidebar">
              <ul className="nav clearfix">
                <li className="sidebar-collapsible">
                  <ul className="collapsible collapsible-accordion">
                    <li>
                      <a className="collapsible-header  waves-effect waves-red">启蒙</a>
                      <div className="collapsible-body" style={{}}>
                        <ul>
                          <li><a href="#tip1" className="collapsible-header  waves-effect waves-red">章节一</a></li>
                          <li><a href="#tip2" className="collapsible-header  waves-effect waves-red">章节二</a></li>
                          <li><a href="#tip3" className="collapsible-header  waves-effect waves-red">章节三</a></li>
               
                        </ul>
                      </div>
                    </li>
                    <li><a className="collapsible-header waves-effect waves-yellow">灵感</a>

                      <div className="collapsible-body" style={{}}>
                        <ul>
                          <li><a href="#" className="collapsible-header waves-effect waves-yellow">章节一</a></li>
                          <li><a href="#" className="collapsible-header waves-effect waves-yellow">章节二</a></li>
                          <li><a href="#" className="collapsible-header waves-effect waves-yellow">章节三</a></li>
                        
                        </ul>
                      </div></li>
                    <li><a className="collapsible-header waves-effect  waves-orange">构思</a>
                      <div className="collapsible-body" style={{}}>
                        <ul>
                          <li><a href="#" className="collapsible-header waves-effect  waves-orange">章节一</a></li>
                          <li><a href="#" className="collapsible-header waves-effect  waves-orange">章节二</a></li>
                          <li><a href="#" className="collapsible-header waves-effect  waves-orange">章节三</a></li>
                        
                        </ul>
                      </div>
                    </li>
                    <li><a className="collapsible-header waves-effect waves-green">实现</a>
                      <div className="collapsible-body" style={{}}>
                        <ul>
                          <li><a href="#" className="collapsible-header waves-effect waves-green">章节一</a></li>
                          <li><a href="#" className="collapsible-header waves-effect waves-green">章节二</a></li>
                          <li><a href="#" className="collapsible-header waves-effect waves-green">章节三</a></li>
                        
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                
              </ul>
</aside>
        </div>




        	)
    }
}

export default SideLeft;
