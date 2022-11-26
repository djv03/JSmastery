const myele= document.querySelector(".navbar");
console.log(myele.innerHTML);
//above line is used to print whole HTML content inside the navbar class

//djv Q:why line:1 is not working with document.querySelectorAll?????
//I need to check this out!

myele.innerHTML= myele.innerHTML+ "<h1>this is my heading</h1>";
//above line is used to add h1 tag to DOM of the HTML page
console.log(myele.innerHTML);