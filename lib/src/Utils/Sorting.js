export const SortJSONArray = (jsonArray, objectKey, sortBy) => {
 const sorter = (objectKey, sortBy) => {
  return (a, b) => {
   if (a[objectKey] > b[objectKey]) {
    if (sortBy === 'asc') {
     return 1;
    } else if (sortBy === 'desc') {
     return -1;
    }
   } else if (a[objectKey] < b[objectKey]) {
    if (sortBy === 'asc') {
     return -1;
    } else if (sortBy === 'desc') {
     return 1;
    }
   }
   return 0;
  };
 };
 return [...jsonArray].sort(sorter(objectKey, sortBy));
};

export const FilterArray = (arry, searchkeyword) => {
 return arry.filter(
  (n) =>
   searchkeyword.length > 0 &&
   n?.toLowerCase().includes(searchkeyword?.toLowerCase())
 );
};

export const NumRange = (start, end, step = 1) => {
 return Array.from(
  { length: Math.floor((end - start) / step) + 1 },
  (_, i) => start + i * step
 );
};
