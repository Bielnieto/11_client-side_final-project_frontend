import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookList from './BookList';

afterEach(() => cleanup());

describe('BookList', () => {
  const books = [
    { id: 1, title: 'Libro 1', author: 'Autor 1', year: 2020, status: 'pending' },
    { id: 2, title: 'Libro 2', author: 'Autor 2', year: 2021, status: 'read' },
  ];

  it('muestra mensaje de carga si loading=true', () => {
    render(<BookList books={[]} loading={true} error={null} onEdit={vi.fn()} onDelete={vi.fn()} />);
    expect(screen.getByText('Cargando libros...')).toBeTruthy();
  });

  it('muestra mensaje de error si error está presente', () => {
    render(<BookList books={[]} loading={false} error={'Error de red'} onEdit={vi.fn()} onDelete={vi.fn()} />);
    expect(screen.getByText('Error: Error de red')).toBeTruthy();
  });

  it('muestra mensaje si no hay libros', () => {
    render(<BookList books={[]} loading={false} error={null} onEdit={vi.fn()} onDelete={vi.fn()} />);
    expect(screen.getByText('No hay libros.')).toBeTruthy();
  });

  it('renderiza una tarjeta BookCard por cada libro', () => {
    render(<BookList books={books} loading={false} error={null} onEdit={vi.fn()} onDelete={vi.fn()} />);
    expect(screen.getByText('Libro 1')).toBeTruthy();
    expect(screen.getByText('Libro 2')).toBeTruthy();
  });

  it('llama a onEdit y onDelete del libro correspondiente', () => {
    const onEdit = vi.fn();
    const onDelete = vi.fn();
    render(<BookList books={books} loading={false} error={null} onEdit={onEdit} onDelete={onDelete} />);
    fireEvent.click(screen.getAllByText('Edit')[0]);
    expect(onEdit).toHaveBeenCalledWith(books[0]);
    fireEvent.click(screen.getAllByText('Delete')[1]);
    expect(onDelete).toHaveBeenCalledWith(books[1]);
  });
});
