//function with generics........

const genericFunc = <T>(argValue: T): T[] => {
  return [argValue];
};
console.log(genericFunc<string>("hellow"));
console.log(genericFunc<number>(12));
console.log(
  genericFunc<{
    name: string;
    roll: number;
  }>({
    name: "roja",
    roll: 12,
  })
);

const genericFuncTuple = <T, y>(argValue: T, argValue2: y): [T, y] => {
  return [argValue, argValue2];
};

//...
type TUser = {
  name: string;
  role: number;
  devType: string;
};
type TUser2 = TUser & { PcType: string };

const user: TUser & {PcType:string} = {
  name: "user1",
  role: 12,
  devType: "MERN",
  PcType: "MERN PC",
};
