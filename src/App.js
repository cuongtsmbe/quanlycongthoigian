
import './App.css';
import Table_list from './Components/Table_list'
import Sort_search from './Components/Sort_search'
import Addtask from './Components/Addtask.js'
import React, {Component} from 'react'

import {connect} from 'react-redux'
class App extends Component{
	
		randomId(){
			return Math.random() * 1321654;
		}

	render(){
	
		var {displayAddTask}=this.props;
		var showAddTask= displayAddTask ? <Addtask  CloseAddTask={this.closeAddTask}   />: '';
		
		return(
			<div className="container mt-30">
				<div className="text-center">
					<h1>Quản lý công việc (Phan Hữu Cường)</h1> 
				</div>
				<div className="row">
					{showAddTask}
					<div className={displayAddTask ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>

						<Sort_search />
								{/*dropdown*/}
							{/*table*/}
						<Table_list 
						 />

					</div>				
				</div>
			</div>

			
			);
	}
}
var mapStateToProps=(state)=>{
	return {
		displayAddTask:state.displayAddTask
	};
}
export default connect(mapStateToProps,null)(App);
