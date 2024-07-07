type Tuser = {
  readonly id: number;
  company: "programming Hero"; //literal type
  country: "Bangladesh" | "India"; //or type
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
};

const userDetails: Tuser = {
  id: 1,
  company: "programming Hero",
  country: "India",
  firstName: "Sakib",
  middleName: "ahmed",
  lastName: "sihab",
};

const user2: Tuser = {
  id: 2,
  company: "programming Hero",
  country: "India",
  firstName: "Sakib",
  // middleName : "ahmed",
  lastName: "sihab"
};


