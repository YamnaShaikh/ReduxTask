import { CREATE_EMPLOYEE } from '../component/constant';


const employeeReducer = (state = {}, action) => {
  //debugger;
  switch (action.type) {
    
    case CREATE_EMPLOYEE:
      return {
        data : action.payload
        
      };
      
    default:
      return state;
  }
  //debugger
};

export default employeeReducer;

