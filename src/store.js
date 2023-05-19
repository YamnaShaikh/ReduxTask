//import userReducer from './Reducer/UserReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import employeeReducer from './component/EmployeeReducer';

const reducer = combineReducers({
    employeeList : employeeReducer,
})

const Store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
  );

export default Store