export const mergeinOneArray = (array1, array2,id1) =>
  array1.map((itm) => ({
    ...array2.find((item) => item[`${id1}`] === itm[`${id1}`] && item),
    ...itm,
  }));

