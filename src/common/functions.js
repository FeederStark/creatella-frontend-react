export function sortBySize(arr) {
  return arr.sort((a, b) => a.size - b.size);
}

export function sortByPrice(arr) {
  return arr.sort((a, b) => a.price - b.price);
}

export function sortById(arr) {
  return arr.sort((a, b) => {
    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return 0;
  });
}

export function parseDate(date) {
  const parsedDate = new Date(date);
  const fullDate = `${parsedDate.getDate()}-${parsedDate.getMonth()
    + 1}-${parsedDate.getFullYear()}`;
  const s = (+new Date() - Date.parse(parsedDate)) / 1e3;
  const m = s / 60;
  const h = m / 60;
  const d = h / 24;
  const w = d / 7;
  const relativeDate = w > 1 ? fullDate : `${Math.round(d)} days ago`;
  return relativeDate;
}
