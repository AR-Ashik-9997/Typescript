const stringRepeater = (param1: string, param2: number = 3) => {
  if (param2 === undefined) {
    param2 = 3;
  }
  console.log(param1.repeat(param2));
};

stringRepeater("Hello", 4);
