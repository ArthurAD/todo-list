function getFormattedDate(milliseconds) {
  if (typeof milliseconds !== 'number') return '';

  const date = new Date(milliseconds);
  return date.toLocaleString();
}

function getStringOfCurrentDate() {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

export { getFormattedDate, getStringOfCurrentDate };
