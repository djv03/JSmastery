//we would see how we  are gonne manupulate elements which is returned by these ways which we have returnrd


//methods and its return type

// document.getElementsByClassName //HTML collection(like array)
// document.querySelector          //object
// document.querySelectorAll       // nodelist


let navlinks = document.querySelectorAll(".navlinks");
console.log(navlinks);//----->this is to print "navlinks" as nodelist

for (let index = 0; index < navlinks.length; index++) {
    // console.log(navlinks[index]);---->this is to print each ele of nodelist "navlink" individually
    
    navlinks[index].style.backgroundColor="pink";
    navlinks[index].style.color="red";   
}
