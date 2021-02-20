

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {DeleleItemFun,updateTask} from './active/indexActive'
class Table_list_Item extends Component{
		DeleleItem=(id)=>{
			this.props.DeleleItem(id);
		}
		updateTaskT=(TaskItem)=>{
			this.props.updateTask(TaskItem);
		}
	render(){
		return(
				<tr>
					<td>{this.props.index}</td>
					<td>{this.props.TaskItem.content}</td>
					<td className="text-center">
						<span className={this.props.TaskItem.trangthai=="1" ? "label label-success": "label label-primary"}>{this.props.TaskItem.trangthai=="1" ? "kich hoat" : "an"}</span>
					</td>
					<td className="text-center">
						<button type="button" className="btn btn-warning" onClick={()=>this.updateTaskT(this.props.TaskItem)}>
							<span className="fa fa-pencil mr-5"></span>
						Sửa
						</button>&nbsp;
						<button type="button" className="btn btn-danger" onClick={()=>this.DeleleItem(this.props.TaskItem.id)}  >
							<span className="fa fa-trash mr-5"></span>Xóa
						</button>
					</td>
				</tr>
			
			);
	}
}
var mapStateToProps=(state)=>{
	return {
	task:state.task,
	displayAddTask:state.displayAddTask
	}; //vì task bị thay đổi khi cập nhật nên ->this.props sẽ bị thay dổi -> render lại Table_list_Item 
		// khi props hay state không bị thay đổi thì hàm render không  đc gọi lại
};
var mapDispatchToProps=dispatch=>{
	return {
		DeleleItem:(id)=>{
			dispatch(DeleleItemFun(id))
		},
		updateTask:TaskItem=>dispatch(updateTask(TaskItem))
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(Table_list_Item);
