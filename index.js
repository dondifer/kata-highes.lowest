const highAndLow = (numbers) => {
  const textArray = numbers.split(" ");
  return `${Math.max(...textArray)} ${Math.min(...textArray)}`;
};

console.log(highAndLow("1 2 3 4 5"));
