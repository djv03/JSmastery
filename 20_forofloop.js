// this tutorial is about "for of" loop
// for of provide simplified syntext for "for" loop

const city=["delhi","mumbai","surat"];

const othercities=[];

for (let eachcity of city) {
    othercities.push(eachcity);
}


// for of is generally used with syntex like
// for (const [singular version of array] of [array]) {
        // console.log([singular version of array]); 
// }

console.log(othercities);