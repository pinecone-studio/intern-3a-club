import { render, fireEvent, screen } from '@testing-library/react';
import { DashboardSidebar } from '../../app/_components/main/sidebar/DashSidebar';
import { ToggleItem } from '../../app/_components/main/sidebar/ToggleItem';

describe('ToggleItem', () => {
  it('adds item when not in list', () => {
    expect(ToggleItem([], 'A')).toEqual(['A']);
    expect(ToggleItem(['A', 'B'], 'C')).toEqual(['A', 'B', 'C']);
  });

  it('removes item when already in list', () => {
    expect(ToggleItem(['A'], 'A')).toEqual([]);
  });
});

describe('DashboardSidebar', () => {
  it('expands group and calls onViewChange on child click', () => {
    const onViewChange = jest.fn();
    render(
      <DashboardSidebar currentActive="Home" onViewChange={onViewChange} />
    );

    fireEvent.click(screen.getByText(/academic/i));
    fireEvent.click(screen.getByText(/courses/i));
    expect(onViewChange).toHaveBeenCalledWith('Courses');
  });

  it('calls onViewChange when top-level item clicked', () => {
    const onViewChange = jest.fn();
    render(
      <DashboardSidebar currentActive="Home" onViewChange={onViewChange} />
    );

    fireEvent.click(screen.getByText(/home/i));
    expect(onViewChange).toHaveBeenCalledWith('Home');
  });
});
