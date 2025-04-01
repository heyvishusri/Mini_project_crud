// src/components/StatsSection.jsx
import React from "react";
import { Link } from "react-router-dom";

function StatsSection({ students }) {
  const totalStudents = students.length;
  const averageScore = students.length > 0
    ? (students.reduce((sum, student) => sum + (student.score || 0), 0) / totalStudents).toFixed(1)
    : 0;

  return (
    <div className="row mb-4">
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow-sm">
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title text-muted mb-2">Total Students</h5>
            <h2 className="mb-0 text-primary">{totalStudents}</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <div className="card h-100 shadow-sm">
          <div className="card-body d-flex flex-column justify-content-center">
            <h5 className="card-title text-muted mb-2">Average Score</h5>
            <h2 className="mb-0 text-primary">{averageScore}%</h2>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-3">
        <Link to="/add" className="card h-100 bg-primary text-white shadow-sm text-decoration-none">
          <div className="card-body d-flex align-items-center justify-content-center">
            <div className="text-center">
              <i className="bi bi-plus-circle fs-2"></i>
              <h5 className="mt-2 mb-0">Add New Student</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default StatsSection;