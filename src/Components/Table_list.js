


import React, {Component} from 'react'
import Table_list_Item from './Table_list_Item'
import { connect } from 'react-redux'
class Table_list extends Component{
		constructor(props){
			super(props);
			this.state={
				locTrangThai:"2",
				filterName:' '
			};
		}
		getValue=(event)=>{
			if(event.target.name==='locTrangThai'){
				this.props.LocTrangThai_funtion(event.target.value);
			}
			this.setState({
				[event.target.name]:event.target.value//mục đích là hiển thị đúng trạng thái lọc dù render lại
			});

		}
		
	render(){
		console.log("update to web 7/2/2021 21h34pm");
		var {ValueSearch}=this.props;
		var {Search_Name}=this.state;
		var valueT=this.props.locTrangThai ? this.props.locTrangThai : '2';
		var array=this.props.task;

		var TaskLocTrangThai=array.filter((event)=>{
			if(valueT!=='2'){
				return event.trangthai===valueT && event.content.toLowerCase().indexOf(this.state.filterName.toLowerCase())!=-1 && event.content.toLowerCase().indexOf(ValueSearch.toLowerCase())!=-1 ;
			}else if(event.content){
				return event.content.toLowerCase().indexOf(this.state.filterName.toLowerCase())!=-1 && event.content.toLowerCase().indexOf(ValueSearch.toLowerCase())!=-1  ;//nếu chọn lọc trang thai la All thì chỉ quan tâm lọc theo filterName
			}
			return 1;

		});


		//sắp xếp sort
		TaskLocTrangThai.sort((a,b)=>{
			if(a.content>b.content){
				return this.props.SortAZ;
			}
			if(a.content<b.content){
				return -this.props.SortAZ;
			}
			return 0;
		});
		var numtrangthai=0 ;
			if(this.props.sortTrangThaiValue===4){
				numtrangthai=-1;
			}else if(this.props.sortTrangThaiValue===3){
				numtrangthai=1;
			}
		TaskLocTrangThai.sort((a,b)=>{
			if(a.trangthai>b.trangthai){
				return -numtrangthai;
			}
			if(a.trangthai<b.trangthai){
				return numtrangthai;
			}
			return 0;
		});



		var item_List=TaskLocTrangThai.map((event,index)=>{
			return <Table_list_Item key={index} index={index} TaskItem={event}  />
		});
		
		return(
			<div>
													
						<div className="row mt-15">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<table className="table table-bordered table-hover">
									<thead>
										<tr>
											<th className="text-center">STT</th>
											<th className="text-center">Tên</th>
											<th className="text-center">Trạng Thái</th>
											<th className="text-center">Hành Động</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td></td>
											<td><input type="text" className="form-control" name="filterName" onChange={this.getValue}/></td>
											<td>
												<select name="locTrangThai" id="input" value={this.state.locTrangThai} className="form-control" onChange={this.getValue}>
													<option  value={"2"} > All </option>
													<option value={"1"}  >Kich hoat</option>
													<option value={"0"}  >An</option>
													
												</select>
											</td>
											
										</tr>
										
										{item_List}
									</tbody>
								</table>
							</div>
						</div>
			</div>
			);
	}
}

var mapStateToProps=(state)=>{
	return {
		task:state.task,// props thay đổi thì render hoạt động(update lifecycle run)
		locTrangThai:state.locTrangThai,
		ValueSearch:state.ValueSearch,
		SortAZ:state.SortAZ,
		sortTrangThaiValue:state.sortTrangThaiValue
	};
};
var mapDispatchToProps=dispatch=>{
	return {
		LocTrangThai_funtion:(valueLoc)=>dispatch({type:'loctrangthai',locTrangThai:valueLoc})
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Table_list);
// export default Table_list;