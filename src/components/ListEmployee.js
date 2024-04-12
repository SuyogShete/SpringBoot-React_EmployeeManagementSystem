import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";

export const ListEmployee = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEmployee = (employeeId) => {
    EmployeeService.deleteEmployeeById(employeeId)
      .then((response) => {
        getAllEmployees();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <h2 className="text-center"> Employee Management System</h2>
      <Link to="/addEmployee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <th> Employee Id </th>
          <th> First Name </th>
          <th> Last Name </th>
          <th> Email</th>
          <th> Actions</th>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td> {employee.id} </td>
              <td> {employee.firstName} </td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/updateEmployee/${employee.id}`}
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (window.confirm("Do you really want to delete the employee")) {
                      deleteEmployee(employee.id);
                    }
                  }}
                  style={{ marginLeft: "10px" }}
                >
                  {" "}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployee;
