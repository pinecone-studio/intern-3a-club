import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SystemTip } from '../components/club-add/SystemTip';

describe('SystemTip', () => {
  it('renders correctly with given text', () => {
    render(<SystemTip />);
    expect(screen.getByText('Хуваарь баталгаажуулалт')).toBeInTheDocument();
    expect(screen.getByText('Систем таны сонгосон олон өдрүүдийн давхцлыг шалгаж байна.')).toBeInTheDocument();
  });
});
