import { format, addMonths, subMonths } from 'date-fns';
import { Button } from '@intern-3a-club/shadcn';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  currentMonth: Date;
  setCurrentMonth: (_v: Date) => void;
};

export const CalendarHeader = ({ currentMonth, setCurrentMonth }: Props) => {
  const goPrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const goNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  return (
    <div className="mb-4 flex items-center justify-between">
      <h1 className="text-xl font-semibold">Approved Clubs Calendar</h1>

      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={goPrevMonth}>
          <ChevronLeft size={16} />
        </Button>

        <div className="font-semibold">{format(currentMonth, 'yyyy MMMM')}</div>

        <Button variant="outline" onClick={goNextMonth}>
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};
