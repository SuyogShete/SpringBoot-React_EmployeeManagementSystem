import axios from "axios";

const Employee_Base_Url = "http://localhost:4000/api/employees";

class EmployeeService {
  getAllEmployees() {
    return axios.get(Employee_Base_Url);
  }

  createEmployee(employee) {
    return axios.post(Employee_Base_Url + "/addEmployee", employee);
  }

  getEmployeeById(id) {
    return axios.get(Employee_Base_Url + "/" + id);
  }

  updateEmployee(id, employee) {
    return axios.put(Employee_Base_Url + "/" + id, employee);
  }

  deleteEmployeeById(id) {
    return axios.delete(Employee_Base_Url + "/" + id);
  }
}

export default new EmployeeService();
