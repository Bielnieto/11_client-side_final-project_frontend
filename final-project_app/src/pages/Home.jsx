import React, { useState } from 'react';
import BookList from '../components/BookList/BookList';
import BookForm from '../components/BookForm/BookForm';
import { useBooks } from '../hooks/useBooks';
import { UI_MESSAGES } from '../utils/constants';

function Home() {
  const { books, loading, error, addBook, updateBook, deleteBook } = useBooks();
  const [editingBook, setEditingBook] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const handleDelete = (book) => {
    if (window.confirm(UI_MESSAGES.CONFIRM_DELETE)) {
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
      <h1>Books</h1>
      {!showForm ? (
        <button 
          onClick={handleAdd} 
          style={{ marginBottom: 20, background: '#10b981', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.3rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseOver={e => e.currentTarget.style.background = '#059669'}
          onMouseOut={e => e.currentTarget.style.background = '#10b981'}
        >
          Add book
        </button>
      ) : (
        <button
          onClick={handleCancel}
          style={{ marginBottom: 20, background: '#f87171', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.3rem', fontSize: '1rem', fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseOver={e => e.currentTarget.style.background = '#dc2626'}
          onMouseOut={e => e.currentTarget.style.background = '#f87171'}
        >
          Cancel
        </button>
      )}
      {showForm && (
        <BookForm book={editingBook} onSave={handleSave} onCancel={handleCancel} />
      )}
      <BookList books={books} loading={loading} error={error} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default Home;
