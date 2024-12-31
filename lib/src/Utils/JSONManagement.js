export const cleanJSONString = (jsonString) => {
 // Replace any newline characters and trim the string to remove excess spaces
 /**
  *  "key1": "value1
  *  ","key2":"value2"
  *  This sort of New line issues at value1 is solved when a JSON String is passed to it.
  */
 return jsonString.replace(/[\n\r]+/g, '').trim();
};

export const CompareJSONArrays = (array1, array2) => {
 // Difference - true, Nodifference - false
 // Ensure both arrays are valid JSON arrays
 if (!Array.isArray(array1) || !Array.isArray(array2)) {
  return false;
 }
 // Check array lengths
 if (array1.length !== array2.length) {
  return true;
 } // Different lengths indicate changes
 // Compare elements using a deep comparison function
 for (let i = 0; i < array1.length; i++) {
  if (!deepCompare(array1[i], array2[i])) {
   return true; // Differences found
  }
 }
 return false; // No differences found
};
const deepCompare = (obj1, obj2) => {
 // Handle primitive values
 if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
  return obj1 === obj2;
 }
 // Handle null and undefined
 if (obj1 === null || obj2 === null) {
  return obj1 === obj2;
 }
 // Check object types
 if (
  Object.prototype.toString.call(obj1) !== Object.prototype.toString.call(obj2)
 ) {
  return false;
 }
 // Compare object properties
 const keys1 = Object.keys(obj1);
 const keys2 = Object.keys(obj2);
 if (keys1.length !== keys2.length) {
  return false;
 }
 for (let key of keys1) {
  if (!deepCompare(obj1[key], obj2[key])) {
   return false;
  }
 }
 return true; // No differences found
};
