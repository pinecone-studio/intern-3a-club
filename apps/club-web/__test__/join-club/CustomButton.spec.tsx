import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CustomButton } from '../../app/JoinClub/_components/ui/Button';
import '@testing-library/jest-dom';

describe('CustomButton Component', () => {
  it('Primary variant-тай зөв render хийгдэж, үндсэн классуудыг авч байна', () => {
    render(<CustomButton variant="primary">Click Me</CustomButton>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    // Үндсэн дизайны классууд
    expect(button).toHaveClass('rounded-2xl', 'px-6', 'py-4', 'font-black');
    // Variant-ийн классууд
    expect(button).toHaveClass('bg-blue-600', 'hover:bg-blue-700');
  });

  it('Destructive variant-тай үед улаан өнгөтэй байна', () => {
    render(<CustomButton variant="destructive">Delete</CustomButton>);
    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toHaveClass('bg-red-500', 'hover:bg-red-600');
  });

  it('Muted variant-тай үед идэвхгүй харагдацтай байна', () => {
    render(<CustomButton variant="muted">Muted</CustomButton>);
    const button = screen.getByRole('button', { name: /muted/i });
    expect(button).toHaveClass('bg-white/5', 'cursor-not-allowed');
  });

  it('Нэмэлт className дамжуулахад үндсэн классууд дээр нэмэгдэж байна', () => {
    render(<CustomButton className="my-custom-class">Extra</CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('my-custom-class');
    // Үндсэн класс хэвээрээ байгааг шалгах
    expect(button).toHaveClass('rounded-2xl');
  });

  it('Товчлуур дарахад onClick функц дуудагдаж байна', () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click</CustomButton>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Disabled үед товчлуур дарагдах боломжгүй бөгөөд opacity нь багассан байна', () => {
    render(<CustomButton disabled>Disabled</CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('Default variant нь primary байна', () => {
    // variant prop дамжуулахгүй үед
    render(<CustomButton>Default</CustomButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-blue-600');
  });
});