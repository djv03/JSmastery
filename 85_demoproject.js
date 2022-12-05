//here is the another project for practising the event

//challange: set a random background-color each time on the click on the specific button


let button= document.querySelector(".clickme");
const current= document.querySelector(".btn")

button.addEventListener("click" ,function(){
    console.log("button is clicked");
    const randomcolor= randomcolorgenerator();
    document.body.style.backgroundColor=randomcolor;  
     
    current.textContent=randomcolor;
})






//let us make the function which makes the random color
function randomcolorgenerator(){
    console.log("func is called");
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    const randomcolor=`rgb(${red},${green},${blue})`
    return randomcolor;
}
