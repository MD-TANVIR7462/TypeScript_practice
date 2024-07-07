{
  // type

  type Tstudent = {
    name: string;
    address: string;
    number: number;
    age: number;
    gender: string;
  };

  type TaddValue = (num1: number, num2: number) => number;

  //.............
  const student1: Tstudent = {
    name: "sai",
    address: "hyd",
    number: 1,
    age: 20,
    gender: "male",
  };

  const addValue: TaddValue = (num1, num2) => {
    return num1 + num2;
  };
}
