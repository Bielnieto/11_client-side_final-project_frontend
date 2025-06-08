import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.css';
import { UI_MESSAGES } from '../../utils/constants';

function BookList({ books, loading, error, onEdit, onDelete }) {
  if (loading) return <div className={styles.info}>{UI_MESSAGES.LOADING}</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!books.length)
    return <div className={styles.info}>{UI_MESSAGES.EMPTY_STATE}</div>;

  return (
    <div className={styles.list}>
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default BookList;
