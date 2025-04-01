// src/hooks/useStudentForm.js
import { useState, useCallback, useMemo } from 'react';

export const useStudentForm = (initialData = {}) => {
  const [formData, setFormData] = useState({
    name: initialData.name || '',
    enr: initialData.enr || '',
    class: initialData.class || '',
    score: initialData.score === undefined ? '' : initialData.score,
    email: initialData.email || '',
    phone: initialData.phone || ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name cannot exceed 50 characters';
    }

    // Enrollment validation
    if (!formData.enr.trim()) {
      newErrors.enr = 'Enrollment number is required';
    } else if (!/^ITE-\d{2,4}$/.test(formData.enr)) {
      newErrors.enr = 'Enrollment number must be in format ITE-XX (where X is a number, 2-4 digits)'
    }

    // Class validation
    if (!formData.class.trim()) {
      newErrors.class = 'Class is required';
    } else if (!/^[A-Z0-9-]{2,10}$/.test(formData.class.toUpperCase())) {
      newErrors.class = 'Class must be 2-10 characters long and contain only letters, numbers, and hyphens';
    }

    // Score validation
    const scoreNum = Number(formData.score);
    if (formData.score === '') {
      newErrors.score = 'Score is required';
    } else if (isNaN(scoreNum)) {
      newErrors.score = 'Score must be a valid number';
    } else if (scoreNum < 0) {
      newErrors.score = 'Score cannot be negative';
    } else if (scoreNum > 100) {
      newErrors.score = 'Score cannot exceed 100';
    } else if (!Number.isInteger(scoreNum)) {
      newErrors.score = 'Score must be a whole number';
    }

    // Email validation
    if (formData.email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address (e.g., user@example.com)';
      } else if (formData.email.length > 100) {
        newErrors.email = 'Email address is too long (maximum 100 characters)';
      }
    }

    // Phone validation
    if (formData.phone) {
      if (!/^\d+$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must contain only digits';
      } else if (formData.phone.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits long';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'score' ? (value === '' ? '' : Number(value)) : value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      enr: '',
      class: '',
      score: '',
      email: '',
      phone: ''
    });
    setErrors({});
  }, []);

  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  return {
    formData,
    errors,
    handleChange,
    validateForm,
    resetForm,
    isValid
  };
};