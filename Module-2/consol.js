{
  // 1. Print all even numbers from 0 – 10
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = (propsNumber) => {
    const number = propsNumber.filter((singleNumber) => singleNumber % 2 == 0);
    return number;
  };
  //   console.log(evenNumbers(numbers));
}

{
  //.......................problem 2........................>>>
  const numbers = [1.45, 2, 3, 4, 5, -6, 7, 8, 9, -10];

  let totalSum = 0;
  let initialNumber = 0;
  let number;
  const sumNumbers = (propNumbers) => {
    propNumbers.map((singleNumber) => {
      number = singleNumber;
      const sum1 = initialNumber + number;
      const finalSum = sum1 + totalSum;
      totalSum = finalSum;
    });
    return totalSum.toFixed(2);
  };
  // console.log(sumNumbers(numbers));
}

{
  //.......................problem 3........................>>>
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const arrayReverse = (array) => {
    let reverseValue = [];
    for (let i = array.length - 1; i >= 0; i--) {
      reverseValue.push(array[i]);
    }
    return reverseValue;
  };
  //console.log(arrayReverse(numbers));
}


  //.......................problem 4........................>>>