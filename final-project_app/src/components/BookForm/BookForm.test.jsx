import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookForm from './BookForm';

afterEach(() => cleanup());

describe('BookForm', () => {
  it('renderiza los campos del formulario', () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByLabelText('Título')).toBeTruthy();
    expect(screen.getByLabelText('Autor')).toBeTruthy();
    expect(screen.getByLabelText('Año')).toBeTruthy();
    expect(screen.getByLabelText('Estado')).toBeTruthy();
  });

  it('llama a onSave con los datos del formulario al enviar', () => {
    const onSave = vi.fn();
    render(<BookForm onSave={onSave} onCancel={vi.fn()} />);
    fireEvent.change(screen.getByLabelText('Título'), { target: { value: 'Nuevo libro' } });
    fireEvent.change(screen.getByLabelText('Autor'), { target: { value: 'Autor Prueba' } });
    fireEvent.change(screen.getByLabelText('Año'), { target: { value: '2024' } });
    fireEvent.change(screen.getByLabelText('Estado'), { target: { value: 'pending' } });
    fireEvent.click(screen.getByText('Guardar'));
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
    fireEvent.click(screen.getByText('Cancelar'));
    expect(onCancel).toHaveBeenCalled();
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
    const input = screen.getByLabelText('Título');
    fireEvent.change(input, { target: { value: 'Probando' } });
    expect(screen.getByDisplayValue('Probando')).toBeTruthy();
  });
});
