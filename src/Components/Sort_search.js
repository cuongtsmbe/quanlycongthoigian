

import Dropdown from './Dropdown.js'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {OpenTask} from './active/indexActive'
import {Search_Name} from './active/indexActive'
class Sort_search extends Component{
		openAddTask=()=>{
			this.props.openAddTask();
		}
		Search_Name=()=>{
			this.props.Search_Name(document.getElementById('Search_Name').value);
		}
	render(){
		return(
			<div>
				<button type="button" className="btn btn-primary" onClick={this.openAddTask} ><h5>+ thêm công việc </h5></button>
							<div className="row mt-15">
								<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
									<div className="input-group">
										<input type="text" id="Search_Name" className="form-control" placeholder="Nhap tu khoa..." />
										<span className="input-group-btn">
											<button type="button" className="btn btn-primary" onClick={this.Search_Name}>Tim</button>
											
										</span>
										<Dropdown  />
									</div>
									
								</div>
							</div>
			</div>
			);
	}
}
var mapStateToProps=(state)=>{
	return {
	};
	 // return {displayAddTask:state.displayAddTask};
};
var mapDispatchToProps=dispatch=>{
	return {
		openAddTask:()=>dispatch(OpenTask()),
		Search_Name:(valueSearch)=>dispatch(Search_Name(valueSearch))
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(Sort_search);
