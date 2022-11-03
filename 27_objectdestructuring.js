//this tutorial is about object destructuring

const song={
   songname:"namo namo",
   movie:"kedarnath",
   singer:"Amit trivedi",
   composer:"amit trivedi"
};

let {songname, movie , ...restkeys}=song;//----->this is called destructuring of object
//now varible is assigned to allocate elements of object
//NOTE: it is not necessary to write let {songname, movie} like this
// we can also write it like let {var1,var2 }, means they are just varibles and can have any name
//but for sake of code redability we have written them with their key name

//NOTE: now songname and movie has become just a normal let varible
//therefore we can update them also

console.log(songname);
songname="closer by chainsmokers";
console.log("updated value of songname is: "+songname);
console.log(movie);
// console.log(singer);//--->thows error,because singer is not declared as variable in line10


//PAY ATTENTION HERE:
console.log(restkeys);//---->this will print rest of the all keys
// coz if spread is use to spread individual elemnent/keys of array/object
//then here it can also store the rest keys 

