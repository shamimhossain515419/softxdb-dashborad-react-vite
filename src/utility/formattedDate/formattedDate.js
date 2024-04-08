export const formattedDate = data => {
  const currentDate = new Date();
  const newData = data ? data : currentDate;
  const year = newData.getFullYear();
  const month = String(newData.getMonth() + 1).padStart(2, '0');
  const day = String(newData.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
