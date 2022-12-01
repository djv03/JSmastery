//in this tutorial we will learn about how to add html ele with out changing .html file

const projectgrid=document.querySelector(".projectgrid");

// projectgrid.innerHTML = "<h2>this is my new added line</h2>";
//this line replaces all the html content of the class "projectgrid" and get which is written in the above line

//now if we want to make previous html intact and add another html tag then we will do following
//  projectgrid.innerHTML= projectgrid.innerHTML+"<h2 style=`height: 10rem;`>this is my new added line</h2>";

//  we can do exact work as line 9 by doing the 

projectgrid.innerHTML += "<h2 style=`height: 10rem;`>this is my new added line</h2>"
//+= is same as x=x+y====> x += y
//this will append the html ele