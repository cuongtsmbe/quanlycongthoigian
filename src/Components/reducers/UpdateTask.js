 var intial={content:' ',
			trangthai:'1'};
 export var TaskUpdate=( state=intial,active)=>{
	switch(active.type){
		case 'updatetask':
		state= active.TaskUpdate;
		return state;
		case 'CloseTask':
			state=intial;
		return state;
		default : return state;
	}
};
