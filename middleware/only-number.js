const onlyNumbers = (array) => {
  return array.every((element) => {
    return typeof element === "number";
  });
};

export default onlyNumbers;
