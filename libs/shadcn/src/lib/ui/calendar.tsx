/* eslint-disable no-unused-vars */
'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

import { cn } from '../utils';
import { buttonVariants } from './button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months:
          'flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0 relative',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-sm font-medium flex justify-center',
        nav: 'flex items-center',
        button_previous: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 top-0 z-10'
        ),
        button_next: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-5 w-5 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 top-0 z-10'
        ),
        month_grid: 'w-full border-collapse space-y-1',
        weekdays: 'flex',
        weekday:
          'text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]',
        week: 'flex w-full mt-2',
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-9 w-9 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center'
        ),
        selected: 'bg-primary text-primary-foreground ring-2 ring-primary/40',
        today: 'bg-accent text-accent-foreground',
        outside:
          'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
        disabled: 'text-muted-foreground opacity-50',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="w-4 h-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="w-4 h-4" />,
      }}
      {...props}
    />
  );
};
Calendar.displayName = 'Calendar';

export { Calendar };
