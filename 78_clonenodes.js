// in this tutorial we are gonna see how to clone nodes(html elements)
// and add them in the DOM

let nweli=document.createElement("li");//------>create new html tag of type li
nweli.textContent="this is just added"//------> write content of the our newly created html tag
//So, line 3 and 4 is for the defination of the our desired node

document.querySelector(".socials").append(nweli);
//nd this line is the for place where we want to put it
// like first we select the elements with class "socials" and then add our newly defined element after it(prepend)

//The problem:
// problem here is that we have to define each time (line in line 3 nd 4) for creating the node
// even if it is exact same

//The solution:

// let newli2=nweli.cloneNode(true);
// let social=document.querySelector(".socials");
// social.prepend(newli2);

//we can merge line 17 18 19 in one line as:
document.querySelector(".socials").prepend(nweli.cloneNode(true));
//NOTE:
// passing true in the cloneNode is neceaasry for proper cloning
// coz without doing this, cloneNode just clones the html tag not the text of the tag
// by passing true we can do this
//this is called "Deep cloning" in JS 