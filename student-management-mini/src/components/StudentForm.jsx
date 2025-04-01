// src/components/StudentForm.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentForm } from "../hooks/useStudentForm";

function StudentForm({ onSave, initialData = {} }) {
  const {
    formData,
    errors,
    handleChange,
    validateForm,
    resetForm,
    isValid
  } = useStudentForm(initialData);

  const navigate = useNavigate();

  useEffect(() => {
    if (initialData && initialData.id) {
      // Update form with initial data instead of resetting
      resetForm();
      handleChange({
        target: {
          name: 'name',
          value: initialData.name || ''
        }
      });
      handleChange({
        target: {
          name: 'enr',
          value: initialData.enr || ''
        }
      });
      handleChange({
        target: {
          name: 'class',
          value: initialData.class || ''
        }
      });
      handleChange({
        target: {
          name: 'score',
          value: initialData.score === undefined ? '' : initialData.score
        }
      });
      handleChange({
        target: {
          name: 'email',
          value: initialData.email || ''
        }
      });
      handleChange({
        target: {
          name: 'phone',
          value: initialData.phone || ''
        }
      });
    }
  }, [initialData, resetForm, handleChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const dataToSave = {
        ...formData,
        score: formData.score === "" ? 0 : Number(formData.score),
      };
      onSave(dataToSave);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="needs-validation">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="enr" className="form-label">Enrollment No.</label>
        <input
          type="text"
          className={`form-control ${errors.enr ? 'is-invalid' : ''}`}
          id="enr"
          name="enr"
          value={formData.enr}
          onChange={handleChange}
          placeholder="ITE-XX"
          required
        />
        {errors.enr && <div className="invalid-feedback">{errors.enr}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="class" className="form-label">Class</label>
        <input
          type="text"
          className={`form-control ${errors.class ? 'is-invalid' : ''}`}
          id="class"
          name="class"
          value={formData.class}
          onChange={handleChange}
          required
        />
        {errors.class && <div className="invalid-feedback">{errors.class}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="score" className="form-label">Score</label>
        <input
          type="number"
          className={`form-control ${errors.score ? 'is-invalid' : ''}`}
          id="score"
          name="score"
          value={formData.score}
          onChange={handleChange}
          min="0"
          max="100"
        />
        {errors.score && <div className="invalid-feedback">{errors.score}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="10 digits number"
        />
        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary" disabled={!isValid}>
          Save
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
