import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ClubsContent } from '../app/JoinClub/_components/ClubsContent';

describe('ClubsContent', () => {
  it('should render correctly with internal state', () => {
    render(<ClubsContent />);

    // 1. Үндсэн гарчиг байгаа эсэхийг шалгах
    expect(screen.getByText(/Клубууд/i)).toBeInTheDocument();

    // 2. Давхардсан текстүүдийг getAllByText-ээр барьж авах
    const roboticsElements = screen.getAllByText(/Robotics Lab/i);

    // Дор хаяж нэг буюу түүнээс олон элемент байгааг батлах
    expect(roboticsElements.length).toBeGreaterThan(0);

    // Эхний элемент нь дэлгэц дээр харагдаж байгааг шалгах
    expect(roboticsElements[0]).toBeInTheDocument();
  }); // Энд хаалт дутуу байсныг заслаа
});
