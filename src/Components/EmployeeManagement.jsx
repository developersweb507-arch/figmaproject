import React, { useState, useEffect } from 'react';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
  const [activeTab, setActiveTab] = useState('employees');
  const [employees, setEmployees] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    email: '',
    department: '',
    position: '',
    salary: ''
  });

  // Sample data
  useEffect(() => {
    setEmployees([
      { id: 'EMP001', name: 'John Doe', email: 'john@example.com', department: 'IT', position: 'Developer', salary: '$5000' },
      { id: 'EMP002', name: 'Jane Smith', email: 'jane@example.com', department: 'HR', position: 'Manager', salary: '$6000' },
      { id: 'EMP003', name: 'Mike Johnson', email: 'mike@example.com', department: 'Finance', position: 'Accountant', salary: '$4500' }
    ]);
  }, []);

  const addEmployee = () => {
    const employee = {
      ...newEmployee,
      id: `EMP${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`
    };
    setEmployees([...employees, employee]);
    setNewEmployee({ id: '', name: '', email: '', department: '', position: '', salary: '' });
    setShowAddModal(false);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const renderEmployeesTab = () => (
    <div className="tab-content">
      <div className="employees-header">
        <h2>Employees ({employees.length})</h2>
        <button className="add-employee-btn" onClick={() => setShowAddModal(true)}>
          + Add Employee
        </button>
      </div>
      
      <div className="employees-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.position}</td>
                <td>{emp.salary}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteEmployee(emp.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAttendanceTab = () => (
    <div className="tab-content">
      <h2>Attendance</h2>
      <p>Attendance management features coming soon...</p>
    </div>
  );

  const renderLeaveTab = () => (
    <div className="tab-content">
      <h2>Leave Management</h2>
      <p>Leave management features coming soon...</p>
    </div>
  );

  const renderPayrollTab = () => (
    <div className="tab-content">
      <h2>Payroll</h2>
      <div className="payroll-grid">
        {employees.map((emp) => (
          <div key={emp.id} className="payroll-card">
            <h4>{emp.name}</h4>
            <p>{emp.salary}</p>
            <button>Generate Payslip</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'employees':
        return renderEmployeesTab();
      case 'attendance':
        return renderAttendanceTab();
      case 'leave':
        return renderLeaveTab();
      case 'payroll':
        return renderPayrollTab();
      default:
        return renderEmployeesTab();
    }
  };

  return (
    <div className="employee-management">
      <div className="header">
        <h1>Employee Management System</h1>
      </div>

      <div className="tabs">
        <button 
          className={activeTab === 'employees' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('employees')}
        >
          Employees
        </button>
        <button 
          className={activeTab === 'attendance' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('attendance')}
        >
          Attendance
        </button>
        <button 
          className={activeTab === 'leave' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('leave')}
        >
          Leave Management
        </button>
        <button 
          className={activeTab === 'payroll' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('payroll')}
        >
          Payroll
        </button>
      </div>

      {renderTabContent()}

      {/* Add Employee Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add New Employee</h3>
            <div className="modal-form">
              <input
                type="text"
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({...newEmployee, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
              />
              <input
                type="text"
                placeholder="Department"
                value={newEmployee.department}
                onChange={(e) => setNewEmployee({...newEmployee, department: e.target.value})}
              />
              <input
                type="text"
                placeholder="Position"
                value={newEmployee.position}
                onChange={(e) => setNewEmployee({...newEmployee, position: e.target.value})}
              />
              <input
                type="text"
                placeholder="Salary (e.g., $5000)"
                value={newEmployee.salary}
                onChange={(e) => setNewEmployee({...newEmployee, salary: e.target.value})}
              />
            </div>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowAddModal(false)}>
                Cancel
              </button>
              <button className="save-btn" onClick={addEmployee}>
                Save Employee
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;