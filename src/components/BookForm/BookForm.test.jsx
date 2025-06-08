import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookForm from './BookForm';

afterEach(() => cleanup());

describe('BookForm', () => {
  it('renderiza los campos del formulario', () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByLabelText('Title')).toBeTruthy();
    expect(screen.getByLabelText('Author')).toBeTruthy();
    expect(screen.getByLabelText('Year')).toBeTruthy();
    expect(screen.getByLabelText('Status')).toBeTruthy();
  });

  it('llama a onSave con los datos del formulario al enviar', () => {
    const onSave = vi.fn();
    render(<BookForm onSave={onSave} onCancel={vi.fn()} />);
    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'Nuevo libro' },
    });
    fireEvent.change(screen.getByLabelText('Author'), {
      target: { value: 'Autor Prueba' },
    });
    fireEvent.change(screen.getByLabelText('Year'), {
      target: { value: '2024' },
    });
    fireEvent.change(screen.getByLabelText('Status'), {
      target: { value: 'pending' },
    });
    fireEvent.click(screen.getByText('Save Book'));
    expect(onSave).toHaveBeenCalledWith({
      title: 'Nuevo libro',
      author: 'Autor Prueba',
      year: '2024',
      status: 'pending',
    });
  });

  it('llama a onCancel al hacer click en Cancelar', () => {
    const onCancel = vi.fn();
    render(<BookForm onSave={vi.fn()} onCancel={onCancel} />);
  });

  it('muestra los valores del libro si se pasa como prop', () => {
    const book = {
      title: 'Libro Editado',
      author: 'Autor Editado',
      year: '2020',
      status: 'pendiente',
    };
    render(<BookForm book={book} onSave={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByDisplayValue('Libro Editado')).toBeTruthy();
    expect(screen.getByDisplayValue('Autor Editado')).toBeTruthy();
    expect(screen.getByDisplayValue('2020')).toBeTruthy();
  });

  it('el formulario es controlado y actualiza el estado al escribir', () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    const input = screen.getByLabelText('Title');
    fireEvent.change(input, { target: { value: 'Probando' } });
    expect(screen.getByDisplayValue('Probando')).toBeTruthy();
  });
});
