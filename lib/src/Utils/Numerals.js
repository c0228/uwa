export const GetLargestNumberInArray = (arry) => {
 return Math.max.apply(0, arry);
};

export const GetSmallestNumberInArray = (arry) => {
 return Math.min.apply(0, arry);
};

export const GetTotalCountOfArray = (arry) => {
 return arry.reduce((a, b) => a + b, 0);
};
