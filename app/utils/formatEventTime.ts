export const formatEventTime = (startIsoString: string, endIsoString: string): string => {
  const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
  const startTime = new Date(startIsoString);
  const endTime = new Date(endIsoString);

  const startTimeFormatted = new Intl.DateTimeFormat('en-US', options).format(startTime);
  const endTimeFormatted = new Intl.DateTimeFormat('en-US', options).format(endTime);

  return `${startTimeFormatted} - ${endTimeFormatted}`;
};
