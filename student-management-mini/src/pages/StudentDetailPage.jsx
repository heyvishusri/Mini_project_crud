// src/pages/StudentDetailPage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

function StudentDetailPage({ getStudentById }) {
  const { id } = useParams();
  const student = getStudentById(id);

  if (!student) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Student Not Found</h4>
          <p>The requested student could not be found. Please check the ID and try again.</p>
          <hr />
          <Link to="/" className="btn btn-secondary">
            <i className="bi bi-arrow-left"></i> Back to List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Student Details</h3>
              <div>
                <Link to="/" className="btn btn-light me-2">
                  <i className="bi bi-arrow-left"></i> Back
                </Link>
                <Link to={`/edit/${student.id}`} className="btn btn-warning">
                  <i className="bi bi-pencil"></i> Edit
                </Link>
              </div>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6">
                  <h4 className="text-primary mb-3">{student.name}</h4>
                  <div className="mb-3">
                    <label className="text-muted">Enrollment No</label>
                    <h5>{student.enr}</h5>
                  </div>
                  <div className="mb-3">
                    <label className="text-muted">Class</label>
                    <h5>{student.class}</h5>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="score-container text-center p-4 bg-light rounded">
                    <h6 className="text-muted mb-2">Score</h6>
                    <div className="display-4 mb-2">{student.score || 0}</div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${student.score || 0}%` }}
                        aria-valuenow={student.score || 0}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-info p-3 bg-light rounded">
                    <h5 className="mb-3">Contact Information</h5>
                    <div className="mb-2">
                      <i className="bi bi-envelope me-2"></i>
                      <strong>Email:</strong>
                      <p className="ms-4 mb-2">{student.email || 'Not provided'}</p>
                    </div>
                    <div>
                      <i className="bi bi-telephone me-2"></i>
                      <strong>Phone:</strong>
                      <p className="ms-4 mb-0">{student.phone || 'Not provided'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDetailPage;
