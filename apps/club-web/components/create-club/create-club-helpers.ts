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
export const formatDate = (date: Date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
};
