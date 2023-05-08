const checkType = (params: unknown) => {
  if (typeof params === "string") {
    console.log(params);
  } else {
    console.log("error message");
  }
};
