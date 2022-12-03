//in this tutorial we are gonna see the interesting use of the this

let btn=document.querySelectorAll(".go-live");
console.log(this);


for (const button of btn) {

    button.addEventListener("click", function(){
        console.log(this);
    })
    
}
console.log(this);

//lets explore the above the code

//line 3 and for-of loop is as usual
//means that line 3 will select our buttons
//and for loop iterate the buttons with the  


//interesting here is the use of "this" in the line 9

//if you notice there is no way to know that which button is clicked 
//untill and unless we defined the click event for each event saperatley

//but this gave us very simple answer to this question
// this will print html content of that button
// and this is fukin work of this; to provide the local content of the selected tag

//after you use of this we can also print textContent of the selected button
// and do all the stuff whihc is possible with the html tag