// objects inside array
// very useful for real world applications

const songs=[
   {songname:"dynamite",singer:"bts",launchedin:2021},
   {songname:"lovely",singer:"billie elish",launchedin:2019},
   {songname:"excuses",singer:" ap dhillon",launchedin:2021}

]

// for (const song of songs) {
//     // console.log(song.launchedin);
//     console.log(song);
// }


//now we will apply our destructuring concepts here

const [{songname,singer},{launchedin},song4]=songs;

//let [{properties of object 3 which you want to print},[can also leave empty],{properties of object 3 which you want to print}]=objectname;
//here all objects of songs has stored in our array 
console.log(songname);//---->prints "dynamite" coz it is defined in the object1 place

console.log(singer);
console.log(launchedin);//------>prints 2019 coz defined in the 2nd object place
//const [{songname,singer}, ,{launchedin},song4]=songs;
//but iif we put an empty space like line 27 then it will print properties of object3
console.log(song4);//----->prints undefined kyuki 4th object hai hi nahi 