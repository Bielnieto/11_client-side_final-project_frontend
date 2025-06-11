import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookList from './BookList';

afterEach(() => cleanup());

describe('BookList', () => {
  const books = [
    {
      id: 1,
      title: 'Book 1',
      author: 'Author 1',
      year: 2020,
      status: 'pending',
    },
    { id: 2, title: 'Book 2', author: 'Author 2', year: 2021, status: 'read' },
  ];

  it('shows loading message if loading=true', () => {
    render(
      <BookList
        books={[]}
        loading={true}
        error={null}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />,
    );
    expect(screen.getByText('Loading...')).toBeTruthy();
  });

  it('shows error message if error is present', () => {
    render(
      <BookList
        books={[]}
        loading={false}
        error={'Network error'}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />,
    );
    expect(screen.getByText('Error: Network error')).toBeTruthy();
  });

  it('shows message if there are no books', () => {
    render(
      <BookList
        books={[]}
        loading={false}
        error={null}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />,
    );
    expect(
      screen.getByText('There are no books in your collection'),
    ).toBeTruthy();
  });

  it('renders a BookCard card for each book', () => {
    render(
      <BookList
        books={books}
        loading={false}
        error={null}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />,
    );
    expect(screen.getByText('Book 1')).toBeTruthy();
    expect(screen.getByText('Book 2')).toBeTruthy();
  });

  it('calls onEdit and onDelete for the corresponding book', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(
      <BookList
        books={books}
        loading={false}
        error={null}
        onEdit={onEdit}
        onDelete={onDelete}
      />,
    );
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(onEdit).toHaveBeenCalledWith(books[0]);
    fireEvent.click(screen.getAllByText('Delete')[1]);
    expect(onDelete).toHaveBeenCalledWith(books[1]);
  });
});
