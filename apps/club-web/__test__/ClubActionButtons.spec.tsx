import { render, screen, fireEvent } from '@testing-library/react';
import { ClubActionButtons } from '../app/JoinClub/_components/ClubActionButton';

describe('ClubActionButtons', () => {
  const mockEnroll = jest.fn();

  it('Суудал дүүрсэн үед товчлуур disabled байх ёстой', () => {
    render(
      <ClubActionButtons
        isEnrolled={false}
        isLocked={false}
        status="Full"
        remainingTime={0}
        onEnroll={mockEnroll}
        onLeave={() => {}}
      />
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(screen.getByText(/СУУДАЛ ДҮҮРСЭН/i)).toBeInTheDocument();
  });

  it('Нээлттэй клуб дээр дарахад onEnroll функц дуудагдах ёстой', () => {
    render(
      <ClubActionButtons
        isEnrolled={false}
        isLocked={false}
        status="Open"
        remainingTime={0}
        onEnroll={mockEnroll}
        onLeave={() => {}}
      />
    );

    const button = screen.getByText(/ОДОО НЭГДЭХ/i);
    fireEvent.click(button);
    expect(mockEnroll).toHaveBeenCalledTimes(1);
  });
});
