const reverseArray =<T>(...args:T[]):T[] => {
  const newArray = [...args].reverse();
  return newArray;
};

const result=reverseArray<string>("string1", "string2", "string3", "string4", "string5", "string6");
console.log(result);
