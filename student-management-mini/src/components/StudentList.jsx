// src/components/StudentList.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";

function StudentList({ students, onDelete }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc'
  });

  const filteredStudents = useMemo(() => {
    let filtered = students.filter(student => 
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.enr.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig.key !== null) {
      filtered.sort((a, b) => {
        if (sortConfig.key === 'score') {
          return sortConfig.direction === 'asc' 
            ? (a[sortConfig.key] || 0) - (b[sortConfig.key] || 0)
            : (b[sortConfig.key] || 0) - (a[sortConfig.key] || 0);
        }
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return filtered;
  }, [students, searchTerm, sortConfig]);
  console.log("StudentList.jsx - received students:", students);
  if (!students || students.length === 0) {
    console.log("StudentList.jsx - No students found or array empty");
    return <p>No students found.</p>;
  }
  console.log("StudentList.jsx - Rendering table for students");

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">Student List</h2>
      </div>
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-light border-end-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-start-0 ps-0"
            placeholder="Search by name or enrollment number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-hover border-0">
          <thead>
            <tr>
              <th onClick={() => {
                setSortConfig({
                  key: 'name',
                  direction: sortConfig.key === 'name' && sortConfig.direction === 'asc' ? 'desc' : 'asc'
                });
              }} className="text-uppercase" style={{ cursor: 'pointer' }}>
                Name {sortConfig.key === 'name' && (
                  <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`}></i>
                )}
              </th>
              <th onClick={() => {
                setSortConfig({
                  key: 'enr',
                  direction: sortConfig.key === 'enr' && sortConfig.direction === 'asc' ? 'desc' : 'asc'
                });
              }} className="text-uppercase" style={{ cursor: 'pointer' }}>
                Enrollment No. {sortConfig.key === 'enr' && (
                  <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`}></i>
                )}
              </th>
              <th className="text-uppercase">Class</th>
              <th onClick={() => {
                setSortConfig({
                  key: 'score',
                  direction: sortConfig.key === 'score' && sortConfig.direction === 'asc' ? 'desc' : 'asc'
                });
              }} className="text-uppercase" style={{ cursor: 'pointer' }}>
                Score {sortConfig.key === 'score' && (
                  <i className={`bi bi-arrow-${sortConfig.direction === 'asc' ? 'up' : 'down'} ms-1`}></i>
                )}
              </th>
              <th className="text-uppercase">Email</th>
              <th className="text-uppercase">Phone</th>
              <th className="text-uppercase text-center">Actions</th>
            </tr>
          </thead>
        <tbody>
          {filteredStudents.map((student) => {
            console.log("StudentList.jsx - Mapping student:", student);
            return (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.enr}</td>
                <td>{student.class}</td>
                <td>{student.score}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td className="text-center">
                  <div className="btn-group" role="group">
                    <Link
                      to={`/student/${student.id}`}
                      className="btn btn-outline-primary btn-sm d-flex align-items-center gap-1"
                      title="View Details"
                    >
                      <i className="bi bi-eye"></i>
                      <span>View</span>
                    </Link>
                    <Link
                      to={`/edit/${student.id}`}
                      className="btn btn-outline-warning btn-sm d-flex align-items-center gap-1"
                      title="Edit Student"
                    >
                      <i className="bi bi-pencil"></i>
                      <span>Edit</span>
                    </Link>
                    <button
                      onClick={() => onDelete(student.id)}
                      className="btn btn-outline-danger btn-sm d-flex align-items-center gap-1"
                      title="Delete Student"
                    >
                      <i className="bi bi-trash"></i>
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default StudentList;
