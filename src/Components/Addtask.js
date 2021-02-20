

import React, {Component} from 'react'
import {connect} from 'react-redux'
import AddTask_save from './reducers/AddTask_save'
import {CloseTask,updateTask} from './active/indexActive'
class Addtask extends Component{

		constructor(props){
			super(props);
			this.state={
				content:' ',
				kichhoat: '1'
			};
		}
		componentDidMount(){	
				this.setState({
						content:this.props.TaskUpdate.content,
						kichhoat:this.props.TaskUpdate.trangthai
				});
		}
		componentWillUpdate(nextProps,nextState){
			if(nextProps!=this.props){
				this.setState({
					content:nextProps.TaskUpdate.content,
					kichhoat:nextProps.TaskUpdate.trangthai
				});
			}

		}

		getValue=(event)=>{
			this.setState({
				[event.target.name]:event.target.value
			});
		}
		submitOnlocal=()=>{
			// this.props.submitOnlocal(this.state);
			if(this.props.TaskUpdate.id){
				this.props.TaskUpdate.content=this.state.content;
				this.props.TaskUpdate.trangthai=this.state.kichhoat;
				this.props.SuaValue(this.props.TaskUpdate);
			}else{
				this.props.AddTaskTet(this.state);
			}
		}
	
		CloseAddTask=()=>{
			this.props.CloseAddTask();
		}
	render(){

		 var {TaskUpdate}=this.props;

		return(
			<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
						<div className="panel panel-warning">
							<div className="panel-heading">
								<h3 className="panel-title">
								{TaskUpdate.content === ' ' ? "Thêm công việc" : "Update task"} 

								<span className="fa fa-times-circle text-right" onClick={this.CloseAddTask}></span>
								</h3>
							</div>
							<div className="panel-body">
								<label htmlFor="input-id" >Tên:</label><br />
								<input type="text" name="content"className="form-control"  value={this.state.content} onChange={this.getValue} />
								<label htmlFor="input-id" >Trạng thái:</label>
								<select name="kichhoat" id="input" className="form-control" value={this.state.kichhoat} onChange={this.getValue}>
									<option value={"1"}>kích hoạt</option>
									<option value={"0"}>ẩn</option>
									
								</select>
								<div className="text-center">
								<br />
								<button type="button" className="btn btn-warning" onClick={this.submitOnlocal}>+ save</button>
								&nbsp; &nbsp;
								<button type="button" className="btn btn-danger" onClick={this.CloseAddTask}>+ cancer</button>
								</div>
							</div>
						</div>
			</div>
			);
	}
}

var mapDispatchToProps =dispatch=>{//lay bat ki event nao vao  props event cho dispatch
	return {
		AddTaskTet:(task)=>dispatch(AddTask_save(task)),
		CloseAddTask:()=>dispatch(CloseTask()),
		SuaValue:(taskU)=>dispatch(updateTask(taskU))
	};
}
var mapStateToProps=stateT=>{//truyen ntu store vao props
	return {
		 TaskUpdate:stateT.TaskUpdate
	};
}

export default connect(mapStateToProps,mapDispatchToProps)(Addtask);
