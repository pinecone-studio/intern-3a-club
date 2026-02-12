import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// Page Router-ийн index.tsx-ийг импортлох
import { Home } from '../pages/index';

describe('Home Page Router Test', () => {
  it('should render the welcome heading', () => {
    // TypeScript-ийн "refers to a value" алдааг арилгах casting
    const PageComponent = Home as React.ElementType;

    render(<PageComponent />);

    // Скриншот дээр таны Home дотор <h1>Welcome!</h1> байгаа тул:
    const heading = screen.getByText(/Welcome!/i);
    expect(heading).toBeInTheDocument();
  });
});
