import React, { useState, useEffect } from 'react';
import styles from './BookForm.module.css';
import { STATUS_LABELS } from '../../utils/constants';

function BookForm({ book, onSave }) {
  const [form, setForm] = useState({
    title: '',
    author: '',
    year: '',
    status: 'pending',
  });

  useEffect(() => {
    if (book) setForm(book);
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} required />
      </label>
      <label>
        Author
        <input name="author" value={form.author} onChange={handleChange} required />
      </label>
      <label>
        Year
        <input name="year" value={form.year} onChange={handleChange} required type="number" min="0" />
      </label>
      <label>
        Status
        <select name="status" value={form.status} onChange={handleChange}>
          {Object.keys(STATUS_LABELS).map((key) => (
            <option key={key} value={key}>{STATUS_LABELS[key]}</option>
          ))}
        </select>
      </label>
      <div className={styles.actions}>
        <button type="submit">Save Book</button>
      </div>
    </form>
  );
}

export default BookForm;
