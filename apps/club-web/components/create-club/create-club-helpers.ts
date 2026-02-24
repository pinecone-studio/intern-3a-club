export const calculateTotalMinutes = (duration: string) => {
    const parts = duration.split(':');
    return parseInt(parts[0]) * 60 + (parseInt(parts[1]) || 0);
};

export const getDayNames = (dates: Date[]) => {
    return Array.from(
        new Set(
            dates.map((d) =>
                new Intl.DateTimeFormat('en-US', { weekday: 'long' })
                    .format(d)
                    .toUpperCase()
            )
        )
    );
};

export const getFrequency = (repeat: string) =>
    repeat === 'none' ? 'ONCE' : repeat.toUpperCase();

export const getMinMax = (val: string) => parseInt(val) || 0;
