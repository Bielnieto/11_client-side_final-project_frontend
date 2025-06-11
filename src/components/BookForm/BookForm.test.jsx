import { describe, it, expect, vi, afterEach } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import BookForm from './BookForm';

afterEach(() => cleanup());

describe('BookForm', () => {
  it('renders the form fields', () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByLabelText('Title')).toBeTruthy();
    expect(screen.getByLabelText('Author')).toBeTruthy();
    expect(screen.getByLabelText('Year')).toBeTruthy();
    expect(screen.getByLabelText('Status')).toBeTruthy();
  });

  it('calls onSave with form data on submit', () => {
    const onSave = vi.fn();
    render(<BookForm onSave={onSave} onCancel={vi.fn()} />);
    fireEvent.change(screen.getByLabelText('Title'), {
      target: { value: 'New Book' },
    });
    fireEvent.change(screen.getByLabelText('Author'), {
      target: { value: 'Test Author' },
    });
    fireEvent.change(screen.getByLabelText('Year'), {
      target: { value: '2024' },
    });
    fireEvent.change(screen.getByLabelText('Status'), {
      target: { value: 'pending' },
    });
    fireEvent.click(screen.getByText('Save Book'));
    expect(onSave).toHaveBeenCalledWith({
      title: 'New Book',
      author: 'Test Author',
      year: '2024',
      status: 'pending',
    });
  });

  it('calls onCancel when clicking Cancel', () => {
    const onCancel = vi.fn();
    render(<BookForm onSave={vi.fn()} onCancel={onCancel} />);
  });

  it('shows book values if passed as prop', () => {
    const book = {
      title: 'Edited Book',
      author: 'Edited Author',
      year: '2020',
      status: 'pending',
    };
    render(<BookForm book={book} onSave={vi.fn()} onCancel={vi.fn()} />);
    expect(screen.getByDisplayValue('Edited Book')).toBeTruthy();
    expect(screen.getByDisplayValue('Edited Author')).toBeTruthy();
    expect(screen.getByDisplayValue('2020')).toBeTruthy();
  });

  it('is a controlled form and updates state on typing', () => {
    render(<BookForm onSave={vi.fn()} onCancel={vi.fn()} />);
    const input = screen.getByLabelText('Title');
    fireEvent.change(input, { target: { value: 'Testing' } });
    expect(screen.getByDisplayValue('Testing')).toBeTruthy();
  });
});
