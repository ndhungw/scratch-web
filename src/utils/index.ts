const simplify = (numb: number) => {
  //   return numb / 1000 > 1 ? `${numb / 1000}k` : numb;
  return numb / 1000 > 1 ? `${Math.floor(numb / 1000)}k` : numb;
};

const capitalizeFirstLetter = (inputString: string) => {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

export { simplify, capitalizeFirstLetter };
