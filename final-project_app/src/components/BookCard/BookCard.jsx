import React from 'react';
import styles from './BookCard.module.css';
import { STATUS_LABELS, STATUS_COLORS } from '../../utils/constants';

function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <strong className={styles.title}>{book.title}</strong>
        </div>
        <span className={styles.year}>{book.year}</span>
      </div>
      <div className={styles.author}>{book.author}</div>
      <div className={styles.statusRow}>
        <span
          className={styles.status}
          style={{ backgroundColor: STATUS_COLORS[book.status] }}
        >
          {book.status}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn} onClick={() => onEdit(book)}>
          Edit
        </button>
        <button className={styles.deleteBtn} onClick={() => onDelete(book)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
