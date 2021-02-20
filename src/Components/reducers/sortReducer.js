
export var SortAZ=(state=0,active)=>{
	switch(active.type){
		case 'SortAZ':
			if(state===active.SortAZValue){
				return 0;
			}
			state=active.SortAZValue;
			return state;
		default : return state;
	}
};
export var SortTT=(state=0,active)=>{
	switch(active.type){
		case 'sortTrangThaitype':
			if(state===active.sortTrangThaiValue){

				return 0;
			}
			state=active.sortTrangThaiValue;
			return state;
		default : return state;
	}
};