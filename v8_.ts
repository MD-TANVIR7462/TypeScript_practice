const user = {
  id: 1,
  name: {
    firstName: "Mezbaul",
    lastName: "Hossain",
  },
  contactNumber: "0199883443",
};

const {
  id,
  name: { firstName }, //distructuring form a object,
} = user;

const FrineArray = ["rachel","alif","raisa","yeakub","habib"]
const [a,b,c]=FrineArray
const [,,bestFriend]=FrineArray
const [,,bestFriend2,...rest]=FrineArray