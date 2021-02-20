var display=true;
export var displayAddTask=(state_dis=display,show_active)=>{
		switch(show_active.type){
			case 'CloseTask':
			return false;
			case 'OpenTask':
			case 'updatetask':
			return true;
			default :return state_dis;
		}
	
};
