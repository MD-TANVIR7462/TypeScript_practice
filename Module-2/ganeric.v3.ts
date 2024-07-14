//..generic type

// const rolenumbers : number[] = [2,3,4]

type generic<Tparams> = Array<Tparams>;

const rolenumbers: Array<number> = [2, 3, 4];
const rolenumber: Array<number> = [2, 3, 4];

const rolenames2: generic<Number> = [1, 2, 3];
const rolenames3: generic<string> = ["a", "b", "c"];

//..................

//generic Object
const user: generic<{ name: string; age: number }> = [
  {
    name: "jhankar",
    age: 25,
  },
  {
    name: "kamal",
    age: 30,
  },
  {
    name: "roja",
    age: 28,
  },
];

//generic Touple
type Tmanus<x, y> = [x, y];
const Manus: Tmanus<string, string> = ["Mr.X", "Mr.Y"];

//..................