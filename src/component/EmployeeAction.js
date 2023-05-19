import { CREATE_EMPLOYEE, LIST_EMPLOYEES, SEARCH_EMPLOYEES } from "./constant";

export const createEmployee = (values) => (dispatch) => {
  //debugger;
  dispatch({
    type: CREATE_EMPLOYEE,
    payload: values
  });
};

export const listEmployees = (userValue) => (dispatch) => {
  dispatch( {
    type: LIST_EMPLOYEES,
    payload: userValue

  });
};

export const searchEmployees = (searchTerm) => {
  return {
    type: SEARCH_EMPLOYEES,
    payload: searchTerm
  };
};
