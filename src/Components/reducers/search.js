
 var intial ='';
export var SearchFu=(state=intial,active)=>{
	switch(active.type){
		case 'searchButton':
		return active.valueSearch;
		default :
		return state;
	}
};
