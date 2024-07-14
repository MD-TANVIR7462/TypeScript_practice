//spread oparator //*Spread oparator will make all the elament out form a array
const bros1 :string[] = ["mir","firoz","mejba"]
const bros2 :string[] = ["mir","firoz","mejba"]
 const finalBros = [...bros1,...bros2]


 //rest oparator //*rest will create all the elements in a array
 const greatFriends = (...friends:string[])=>{
   console.log(friends)
 }

 greatFriends("roja","roja","roja","roja")

 