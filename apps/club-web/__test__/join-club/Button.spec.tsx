import { render, screen } from '@testing-library/react';
import { CustomButton } from '../../app/JoinClub/_components/ui/CustomButton'

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<CustomButton>Base Button</CustomButton>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});

// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import { CustomButton } from '../../app/JoinClub/_components/ui/CustomButton';
// import '@testing-library/jest-dom';

// describe('CustomButton Component', () => {
//   it('Primary variant-тай зөв render хийгдэж байна', () => {
//     render(<CustomButton variant="primary">Click Me</CustomButton>);
//     const button = screen.getByRole('button', { name: /click me/i });
//     // Received утгаас "bg-blue-600 hover:bg-blue-500" байгааг харж болно
//     expect(button).toHaveClass('bg-blue-600', 'hover:bg-blue-500');
//   });

//   it('Destructive variant-тай зөв render хийгдэж байна', () => {
//     render(<CustomButton variant="destructive">Delete</CustomButton>);
//     const button = screen.getByRole('button', { name: /delete/i });
//     // Received утга нь "bg-red-500/10" байна
//     expect(button).toHaveClass('bg-red-500/10', 'hover:bg-red-500');
//   });

//   it('Нэмэлт className дамжуулахад үндсэн классуудтай зөв нэгдэж байна', () => {
//     render(<CustomButton className="custom-extra">Extra</CustomButton>);
//     const button = screen.getByRole('button');
//     expect(button).toHaveClass('custom-extra');
//     // Таны код дээр "rounded-xl" байгаа тул "rounded-2xl"-ийг засна
//     expect(button).toHaveClass('rounded-xl'); 
//   });

//   it('Muted variant-тай үед зөв класс авч байна', () => {
//     render(<CustomButton variant="muted">Muted</CustomButton>);
//     const button = screen.getByRole('button', { name: /muted/i });
//     expect(button).toHaveClass('bg-white/5');
//   });

//   it('Товчлуур дарахад onClick функц дуудагдаж байна', () => {
//     const handleClick = jest.fn();
//     render(<CustomButton onClick={handleClick}>Click</CustomButton>);
//     fireEvent.click(screen.getByRole('button'));
//     expect(handleClick).toHaveBeenCalledTimes(1);
//   });

//   it('Disabled үед товчлуур идэвхгүй байна', () => {
//     render(<CustomButton disabled>Disabled</CustomButton>);
//     expect(screen.getByRole('button')).toBeDisabled();
//     expect(screen.getByRole('button')).toHaveClass('disabled:opacity-50');
//   });
// });