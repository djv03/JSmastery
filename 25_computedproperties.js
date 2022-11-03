//in this tutorial we will discuss aboout "computed properties in array";

const key1="objkey1";
const key2="objkey2";

const value1="value1";
const value2="value2";
//now our task is to convert above data in to objects with corrosponding key value pair

let person={ };
person[key1]= value1;
person[key2]= value2;
//give o/p as --> { objkey1: 'value1', objkey2: 'value2' }
//so [kuch bhi key] notation will take kuch bhi key as key in object and assign name which has given to it while declaring it 

//          now you might ask : what if we do it with . notation
// person.key1=value1;
// person.key2=value2;
//but this will give o/p as --> { key1: 'value1', key2: 'value2' }
// while . notation simply update the key as "key1" and "key2" respectively
//this is same as we have seen in  22_objectinto.js:line 25
console.log("by using [] notation")
console.log(person);


//---> but JS has given us specia feature which will do above task more shortly

const person2={
    [key1]:value1,
    [key2]:value2
}
//here key1 and key2 has become the computed properties 
console.log("by using computed properties")
console.log(person2)