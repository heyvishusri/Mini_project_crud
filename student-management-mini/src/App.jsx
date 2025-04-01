// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import HomePage from "./pages/HomePage";
import AddStudentPage from "./pages/AddStudentPage";
import EditStudentPage from "./pages/EditStudentPage";
import StudentDetailPage from "./pages/StudentDetailPage";
import { initialStudents } from "./data/mockData";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./styles/global.css";
import "./App.css";

function App() {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem('students');
    return savedStudents ? JSON.parse(savedStudents) : initialStudents;
  });

  const addStudent = useCallback((studentData) => {
    const newStudent = {
      id: Date.now(),
      ...studentData,
    };
    setStudents((prevStudents) => {
      const updatedStudents = [...prevStudents, newStudent];
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      return updatedStudents;
    });
  }, []);

  const deleteStudent = useCallback((id) => {
    setStudents((prevStudents) => {
      const updatedStudents = prevStudents.filter((student) => student.id !== id);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      return updatedStudents;
    });
  }, []);

  const updateStudent = useCallback((id, updatedData) => {
    setStudents((prevStudents) => {
      const updatedStudents = prevStudents.map((student) =>
        student.id === id ? { ...student, ...updatedData } : student
      );
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      return updatedStudents;
    });
  }, []);

  const getStudentById = useCallback(
    (id) => {
      const numericId = parseInt(id, 10);
      return students.find((student) => student.id === numericId);
    },
    [students]
  );

  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Home
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/add">
                    Add Student
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<HomePage students={students} onDelete={deleteStudent} />}
          />
          <Route
            path="/add"
            element={<AddStudentPage onAdd={addStudent} />}
          />
          <Route
            path="/edit/:id"
            element={
              <EditStudentPage
                onUpdate={updateStudent}
                getStudentById={getStudentById}
              />
            }
          />
          <Route
            path="/student/:id"
            element={
              <StudentDetailPage getStudentById={getStudentById} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
