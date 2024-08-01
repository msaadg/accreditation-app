export const formatDateEvents = (dateString: string): string => {
  const date = new Date(dateString);
  const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Add the appropriate ordinal suffix to the day
  const ordinalSuffix = (n: number) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return `${dayOfWeek}, ${ordinalSuffix(day)} ${month} ${year}`;
}