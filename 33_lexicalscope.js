// lexical scope in JS

// const variable="value outside main()"

function main(){
    console.log("we r inside main()");
    // let variable="value inside main()";

    const insidemain=function(){
        let variable="value inside function()"
        console.log("we r inside insidemain()",variable);
    }
    insidemain();

}

main();

//now let us understand what us happening in above code

// here we have 2 functions  main() contains----> insidemain()
//and a variable const variable, which has declare at 3 diff places;
// outside main(), inside main() but outside of insidemain(), and inside insidemain()

//now q is which value would be print on line:11;
//answer is which is nearest to "territory" of it

//means on calling for variable in line:10, it first look into its own territory i.e. inside insidemain() function 
            //if found it then print it 
// else look into territory of insidemain() which is whole main() function 
            //if found then print else
//look outside its territory i.e. here in whole programme

//this terrotories is called "lexicle scope" in technical terms
//so in above code will print value at line:1(check yourself by uncommneting and commenting various variable declaration)