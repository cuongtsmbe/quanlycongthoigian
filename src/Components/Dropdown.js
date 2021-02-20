

import React, {Component} from 'react'
import {connect } from 'react-redux'
import {FunctionSort} from './active/indexActive'
class Dropdown extends Component{

	sortName=(value)=>{
	this.props.SelectSort(value);
	}

	render(){
			return(
			
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
								<div className="dropdown">
								  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								    sort
								  </button>

								  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
								    <li >
								   	 	<a role="button" className={this.props.SortAZ==1 ? "sort_selected" : ""}><span className="fa fa-sort-alpha-desc pr-5" onClick={()=>this.sortName(1)}>Tên A-Z</span></a>
								    	
								    </li>
								    <li >
								    	<a role="button" className={this.props.SortAZ==-1 ? "sort_selected" : ""}><span className="fa fa-sort-alpha-desc pr-5" onClick={()=>this.sortName(-1)}>Tên Z-A</span></a>
								    </li>
								    <li role="separator" className="divider"></li>
								    <li ><a role="button" className={this.props.sortTrangThaiValue==3 ? "sort_selected" : ""} onClick={()=>this.sortName(3)}>Trạng Thái Kích Hoạt</a></li>
								    <li ><a role="button" className={this.props.sortTrangThaiValue==4 ? "sort_selected" : ""} onClick={()=>this.sortName(4)}>Trạng Thái Ẩn</a></li>
								  </ul>
								</div>
				</div>
			
			);
	}
}
var mapDispatchToProps=(dispatch)=>{
	return {
		SelectSort:(value)=>dispatch(FunctionSort(value))
	};
}
var mapStateToProps=state=>{
	return {
		SortAZ:state.SortAZ,
		sortTrangThaiValue:state.sortTrangThaiValue
	};
}
export default  connect(mapStateToProps,mapDispatchToProps)(Dropdown);
