// src/pages/AddStudentPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function AddStudentPage({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = (studentData) => {
    onAdd(studentData);
    navigate("/"); // Navigate back to the home page after adding
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <StudentForm onSave={handleAdd} />
    </div>
  );
}

export default AddStudentPage;
