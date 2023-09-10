const getLevel = (count: number) => {
  if (count === 0) return 0;
  if (count < 5) return 1;
  if (count < 10) return 2;
  if (count < 15) return 3;
  return 4;
};

export const standardCalendar = (items) => {
  if (!items || items.length === 0) return [];

  // sort by date
  items!.sort((a, b) => a.date.localeCompare(b.date));

  const first = items![0];
  const last = items![items!.length - 1];

  const firstDate = new Date(first.date);
  const lastDate = new Date(last.date);
  const diff = lastDate.getTime() - firstDate.getTime();
  const diffDays = diff / (1000 * 3600 * 24);

  if (diffDays < 365) {
    const newFirstDate = new Date(lastDate);
    newFirstDate.setFullYear(newFirstDate.getFullYear() - 1);
    const newFirstDateStr = newFirstDate.toISOString().split('T')[0];
    items!.unshift({ date: newFirstDateStr, count: 0 });
  }

  return items!.map((item) => {
    return {
      date: item.date,
      count: item.count,
      level: getLevel(item.count)
    };
  });
};
