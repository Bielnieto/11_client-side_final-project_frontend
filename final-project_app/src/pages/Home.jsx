import React, { useState } from 'react';
import BookList from '../components/BookList/BookList';
import BookForm from '../components/BookForm/BookForm';
import { useBooks } from '../hooks/useBooks';

function Home() {
  const { books, loading, error, addBook, updateBook, deleteBook } = useBooks();
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDelete = (book) => {
    if (window.confirm('¿Seguro que quieres borrar este libro?')) {
      deleteBook(book.id);
    }
  };

  const handleAdd = () => {
    setEditingBook(null);
    setShowForm(true);
  };

  const handleSave = (book) => {
    if (editingBook) {
      updateBook({ ...editingBook, ...book }).then(() => setShowForm(false));
    } else {
      addBook(book).then(() => setShowForm(false));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>Libros</h1>
      <button onClick={handleAdd} style={{ marginBottom: 20 }}>Añadir libro</button>
      {showForm && (
        <BookForm book={editingBook} onSave={handleSave} onCancel={handleCancel} />
      )}
      <BookList books={books} loading={loading} error={error} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
