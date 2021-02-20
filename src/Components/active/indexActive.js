import {nameActive1,nameActive2} from './../constants/indexConstant'
// import {connect} from 'react-redux'
export var activeList=()=>{
	return {
		type:nameActive1
	};
};
export var CloseTask=()=>{
	return {
		type:"CloseTask"
	};
}
export var OpenTask=()=>{
	return {
		type:"OpenTask"
	};
}
export var DeleleItemFun=(id)=>{
	return {
		type:"DeleleItem_task",
		id:id
	};
}
var mapStateToProps=state=>{
	return {
		intialTask:state.TaskUpdate
	};
}
export var updateTask=(TaskUpdate)=>{
			return {
				type:'updatetask',
				TaskUpdate:TaskUpdate
			};
}

export var Search_Name=valueSearch=>{
		return {
			type:'searchButton',
			valueSearch
		};
}
export var FunctionSort=(value)=>{
	switch(value){
		case 1:
		case-1:
		return {
			type:'SortAZ',
			SortAZValue:value
		};
		case 3:
		case 4:
		return {
			type:'sortTrangThaitype',
			sortTrangThaiValue:value
		}
		default :return 0;
	}
}

