import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TeacherSelect } from '../../components/create-club/TeacherSelect';

describe('TeacherSelect Component', () => {
    const mockTeachers = [
        { id: '1', firstName: 'John', lastName: 'Doe' },
        { id: '2', firstName: 'Jane' },
    ];

    it('renders teachers from props when provided', () => {
        const onChange = jest.fn();
        render(
            <TeacherSelect
                value=""
                onChange={onChange}
                teachers={mockTeachers}
                className="test-class"
            />
        );

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
        expect(onChange).toHaveBeenCalled();
    });

    it('renders fallback options when teachers are not provided', () => {
        const onChange = jest.fn();
        render(
            <TeacherSelect
                value=""
                onChange={onChange}
                className="test-class"
            />
        );

        expect(screen.getByText('Эрдэнэцогт')).toBeInTheDocument();
        expect(screen.getByText('Наранцацралт')).toBeInTheDocument();
    });

    it('renders student option always', () => {
        render(
            <TeacherSelect
                value=""
                onChange={() => { }}
            />
        );

        expect(screen.getByText('Сурагч')).toBeInTheDocument();
    });
});
