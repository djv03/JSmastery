//in this tutorial we are going to solve a porblem based on the event

//problem: change the color of the button after clicking it

let buttons= document.querySelectorAll(".go-live");

document.addEventListener("click" ,function(e){
    console.log("button is clicked");
    // document.querySelectorAll(".go-live").style.Color="blue";
    // document.querySelectorAll(".go-live").style.backgroundColor="yellow";
    e.target.style.backgroundColor="yellow";
    // addEventListener.target.style.Color="black";

})