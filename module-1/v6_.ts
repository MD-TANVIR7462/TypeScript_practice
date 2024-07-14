function addHandler(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(addHandler(2, 2));

const ArroHandelar = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(ArroHandelar(2, 2));

const poorUser = {
  name: "poorUser",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};


const numberArray : number[] = [1,2,3,4,5,6,7,8,9]
const arrayHandelar = numberArray.map((signleElem:number) :number=> signleElem+signleElem)


