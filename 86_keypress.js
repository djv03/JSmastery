//keypress event is used to identify which key is pressed

let button=document.querySelector(".clickme");
console.log(button);

button.addEventListener("keypress",function(e){
    console.log(e.key);
})