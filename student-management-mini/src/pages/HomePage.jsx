// src/pages/HomePage.jsx
import React from "react";
import StudentList from "../components/StudentList";
import StatsSection from "../components/StatsSection";

function HomePage({ students, onDelete }) {
  return (
    <div className="container-fluid">
      <h1 className="mb-4">Dashboard</h1>
      <StatsSection students={students} />
      <StudentList students={students} onDelete={onDelete} />
    </div>
  );
}

export default HomePage;
