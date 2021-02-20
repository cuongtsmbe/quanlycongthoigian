import {nameActive1} from './../constants/indexConstant' 
var localvalue=JSON.parse(localStorage.getItem('Tasks'));

var initialValue=localvalue ? localvalue : [];
	function randomId(){
			return Math.random() * 1321654;
		}
var reducerTask=(state=initialValue,active)=>{
	
	switch(active.type){
		case nameActive1: {
				return state;
			}
			break;
		case 'addtask':
			var id=randomId();
			var temp={};
			temp.id=id;
			temp.content=active.obj_state.content;
			temp.trangthai=active.obj_state.kichhoat;
			state.push(temp);
			localStorage.setItem('Tasks',JSON.stringify([...state]));//tra ve array != JSON.stringify(state) trave object =>> error map and filter for array
		return [...state];//<=> trả về mảng copy như state thay vì trả về tham chiếu 
			break;
		case 'DeleleItem_task':
			var index = state.findIndex((event)=>event.id===active.id);
			if(index!=-1){
				state.splice(index,1);
			}
			localStorage.setItem('Tasks',JSON.stringify([...state]));
			return [...state];
			break;
		case 'updatetask':
			var index = state.findIndex((event)=>event.id===active.TaskUpdate.id);
			if(index!=-1){
				 state[index]=active.TaskUpdate;
				 //state.splice(index,1,active.TaskUpdate);
			}
			localStorage.setItem('Tasks',JSON.stringify([...state]));
			return [...state];
			break;
		default : return state;
	}
	
};

export default reducerTask;