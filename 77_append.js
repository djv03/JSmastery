//append is propery simmilar to what we have done in the 76 file 
//this is widley used coz it cosumes less memory as compare to the adding htmlele directley

let newsocial= document.createElement("a");
newsocial.textContent="this our new social media handle";


const socialhandals= document.querySelector(".socials");

socialhandals.append(newsocial);//here we have appendeed the newssocial custom html ele succesfully
console.log(newsocial);
newsocial.classList.add("socialbg")// and here we have given style to the newsocial all by JS succesfully

//there is another property that gave the simmilar result
//prepend
//instead it add ele to the begining of the selected class


//simmillaely we have diff methods which maipulates the HTML DOM structure 

// 1.remove()----> removes the ele of class which is has passed inside it
// 2.before------> add ele before the  class which is has passed inside it
// 3. after------> add ele after the  class which is has passed inside it