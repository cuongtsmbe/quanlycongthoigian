var intial='2'
export var locTrangThai=(state=intial,active)=>{
	switch(active.type){
		case 'loctrangthai':
			state=active.locTrangThai;
		return state;
		default : return state;
	}
};