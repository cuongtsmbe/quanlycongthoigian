import Reducer from './Reducer'
import  {combineReducers} from 'redux'
import AddTask_save from './AddTask_save'
import {displayAddTask} from './displayAddTask'
import {TaskUpdate} from './UpdateTask'
import {locTrangThai} from './LocTrangThai'
import {SearchFu} from './search'
import {SortAZ,SortTT} from './sortReducer'
var myReducer=combineReducers({
	task:Reducer,
	displayAddTask,
	TaskUpdate,
	locTrangThai,
	ValueSearch:SearchFu,
	SortAZ:SortAZ,
	sortTrangThaiValue:SortTT
});

export default myReducer;