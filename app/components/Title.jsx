import React,{Component} from 'react';

class Title extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Title';
        this.state={
        	Title: '这是我们的商业画布'
        };
    }

    componentDidMount() {
  
//fetch 方法获取数据


		var that = this;

fetch('http://192.168.1.130:8080/hifoxlab/tools/1').then(res => {
    if (res.ok) {
        res.json().then(function(obj) {
        	
        	var title= obj.data.title;
        	that.setState({Title:title})
            
        })
    }
}, function(ex) {
    console.log(ex)
})

//jUery 的ajax获取数据

 // $.ajax({
 //            url : "http://192.168.1.130:8080/hifoxlab/tools/1",
 //            type : "get",
 //            dataType : "json",
 //            cache : false,
 //            success : function(result){
 //                this.setState({
 //                    Title: result.data.title
 //                });
 //            }.bind(this),
 //            error : function(){
 //                console.log("获取失败...");
 //            }
 //        });

    }



    render() {
        return (
        	<div>
        	<h3>{this.state.Title}</h3>
        	</div>);
    }
}

export default Title;
