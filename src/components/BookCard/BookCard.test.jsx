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

  it('displays the book title', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText('Clean Code')).toBeTruthy();
  });

  it('displays the book author', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText('Robert C. Martin')).toBeTruthy();
  });

  it('displays the book year', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    expect(screen.getByText('2008')).toBeTruthy();
  });

  it('calls onEdit with the book when Edit is clicked', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    fireEvent.click(screen.getByText('Edit'));
    expect(onEdit).toHaveBeenCalledWith(book);
  });

  it('calls onDelete with the book when Delete is clicked', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookCard book={book} onEdit={onEdit} onDelete={onDelete} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(onDelete).toHaveBeenCalledWith(book);
  });
});
