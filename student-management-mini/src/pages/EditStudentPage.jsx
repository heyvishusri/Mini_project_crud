// src/pages/EditStudentPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentForm from "../components/StudentForm";

function EditStudentPage({ getStudentById, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentToEdit = getStudentById(id);

  if (!studentToEdit) {
    return <p>Student not found!</p>;
  }

  const handleUpdate = (updatedData) => {
    onUpdate(studentToEdit.id, updatedData);
    navigate("/"); // Navigate back to the home page after updating
  };

  return (
    <div>
      <h2>Edit Student: {studentToEdit.name}</h2>
      <StudentForm onSave={handleUpdate} initialData={studentToEdit} />
    </div>
  );
}

export default EditStudentPage;
