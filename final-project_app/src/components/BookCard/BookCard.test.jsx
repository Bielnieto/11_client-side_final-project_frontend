import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookCard from './BookCard';
import { BOOK_STATUS } from '../../utils/constants';

afterEach(() => cleanup());

describe('BookCard', () => {
  const book = {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2008,
    status: BOOK_STATUS.READ,
  };

  it('muestra el título del libro', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText('Clean Code')).toBeTruthy();
  });

  it('muestra el autor del libro', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText('Robert C. Martin')).toBeTruthy();
  });

  it('muestra el año del libro', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText('2008')).toBeTruthy();
  });

  it('llama a onEdit con el libro al hacer click en Edit', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    fireEvent.click(screen.getByText('Edit'));
    expect(onEdit).toHaveBeenCalledWith(book);
  });

  it('llama a onDelete con el libro al hacer click en Delete', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(onDelete).toHaveBeenCalledWith(book);
  });
});
