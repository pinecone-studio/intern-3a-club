import React from 'react';
import { render, screen } from '@testing-library/react';
import { JoinedMembersList } from '../../app/JoinClub/_components/JoinedMembersList';


describe('JoinedMembersList', () => {
  it('гишүүн байхгүй үед "Одоогоор гишүүн алга" гэсэн текст харуулна', () => {
    render(<JoinedMembersList lastnames={[]} />);
    expect(screen.getByText('Одоогоор гишүүн алга')).toBeInTheDocument();
  });

  it('"Элссэн гишүүд :" гэсэн гарчиг үргэлж харагдана', () => {
    render(<JoinedMembersList lastnames={[]} />);
    expect(screen.getByText('Элссэн гишүүд :')).toBeInTheDocument();
  });

  it('нэг гишүүний нэрийг зөв харуулна', () => {
    render(<JoinedMembersList lastnames={['Батбаяр']} />);
    expect(screen.getByText('Батбаяр')).toBeInTheDocument();
  });

  it('олон гишүүний нэрийг зөв харуулна', () => {
    const lastnames = ['Батбаяр', 'Энхтуяа', 'Дорж'];
    render(<JoinedMembersList lastnames={lastnames} />);

    lastnames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('гишүүн байхад "Одоогоор гишүүн алга" текст харагдахгүй', () => {
    render(<JoinedMembersList lastnames={['Батбаяр']} />);
    expect(screen.queryByText('Одоогоор гишүүн алга')).not.toBeInTheDocument();
  });

  it('гишүүдийн тоо зөв байна', () => {
    const lastnames = ['Батбаяр', 'Энхтуяа', 'Дорж'];
    render(<JoinedMembersList lastnames={lastnames} />);

    const spans = screen.getAllByText(/Батбаяр|Энхтуяа|Дорж/);
    expect(spans).toHaveLength(3);
  });

  it('давхардсан нэртэй гишүүдийг зөв харуулна', () => {
    const lastnames = ['Батбаяр', 'Батбаяр'];
    render(<JoinedMembersList lastnames={lastnames} />);

    const spans = screen.getAllByText('Батбаяр');
    expect(spans).toHaveLength(2);
  });
});