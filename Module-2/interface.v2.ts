//interface...........
type user1 = {
    id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
}
 interface user2 {
    id: number;
    name: string;
    age: number;
    email: string;
    isActive: boolean;
    isVIP: boolean;
 }
type userwithRole = user1 & {role:string}



 const User:userwithRole = {
    id: 1,
    name: "Sai",
    age: 20,
    email: "sai@example.com",
    isActive: true,
    role: "Admin"
 }
 

type role = number[]
const rolnumber :role = [1,2,3]

//NOTE: always use TYPE interface is a pain I think..........over Rated work 