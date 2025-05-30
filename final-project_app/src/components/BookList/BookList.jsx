import React from 'react';
import BookCard from '../BookCard/BookCard';
import styles from './BookList.module.css';

function BookList({ books, loading, error, onEdit, onDelete }) {
  if (loading) return <div className={styles.info}>Cargando libros...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!books.length) return <div className={styles.info}>No hay libros.</div>;

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
