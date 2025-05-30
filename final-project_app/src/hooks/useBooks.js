import { useState, useEffect } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/books';

export function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books
  const fetchBooks = () => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar libros');
        return res.json();
      })
      .then((data) => {
        setBooks(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add book
  const addBook = (book) => {
    return fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al crear libro');
        return res.json();
      })
      .then((newBook) => {
        setBooks((prev) => [...prev, newBook]);
        return newBook;
      });
  };

  // Update book
  const updateBook = (book) => {
    return fetch(`${API_URL}/${book.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al actualizar libro');
        return res.json();
      })
      .then((updatedBook) => {
        setBooks((prev) => prev.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
        return updatedBook;
      });
  };

  // Delete book
  const deleteBook = (id) => {
    return fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then((res) => {
        if (!res.ok) throw new Error('Error al borrar libro');
        setBooks((prev) => prev.filter((b) => b.id !== id));
      });
  };

  return { books, loading, error, addBook, updateBook, deleteBook, fetchBooks };
}
