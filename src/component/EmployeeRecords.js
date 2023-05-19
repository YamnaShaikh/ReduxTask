import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { listEmployees } from './EmployeeAction';

const EmployeeRecords = () => {
    const dispatch = useDispatch();
    const [employees, setEmployees] = useState([])

    const employeeList = useSelector((state) => state.employeeList);
    // debugger;
    const { loading, error, values } = employeeList;
  
    useEffect(() => {
      dispatch(listEmployees());
      setEmployees({...values})
    }, [dispatch]);
    console.log(values);

  return (
    <div>
         <Table className="table table-light table-hover">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company</th>
              <th scope="col">Role</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => {
              return (
                <>
                  {console.log(employee)}
                  <tr className="table-light">
                    <th scope="row">{index + 1}</th>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.company}</td>
                    <td>{employee.role}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
    </div>
  )
}

export default EmployeeRecords