// in this tutroial we will learn about "classlist"

// classlist---> property of DOM tree which gives us classes containes by the className passed into it

const projectgrid= document.querySelector(".projectgrid");
// console.log(projectgrid.classList);
// above line will print all the classes containes by the DOM ele which containes the class .projectgrid
// now you might think why the heck we want to print list of class by using classname 
//here is your answer

//we can add css property using javascript by classList
projectgrid.classList.add('projectgridbg');
//like in above line css propety "projectgridbg" is added to html elements which has parent class "projectgrid"
//we can now write JS logic of how to apply this property by (maybe) settimeout or onmouse events(in the future) 

console.log(projectgrid);

//we also have remove() property to delete the class is necessary