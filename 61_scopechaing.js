//let us discuss the "chaining" of scope
//we have already discussed the what is scope of the variable is

//now discuss what is lexicle scope?

console.log("hii");
function myfunc1(){
    var b=10;
    console.log(b);
    function myfunc2() {
        console.log("from my func2: "+b);
    }
    myfunc2();
}
myfunc1();

//now you can see that myfunc2 is acessing b even if it is not in its body

//So how myfunc2 is able to know the value of the b???

//for this we have to understand working if JS engine

//first of line of execution is line 15 coz it is where invokation is started for the first time
//untill now every thing is just declaration

//after it control moves to line:7
// now it has 2 thing in the its execution context b=10 and whole body of myfunc2

//now on line:13 myfunc2() is invoked and control goes to line:10
// now new FEC is created for myfunc2() and it has only one thing
// to print b
//but b is nowhere presnt in the body of the myfunc2()

// So js engine goes to parent leaxicle scope of the myfunc2()
// which is myfunc1()
//and start finding b
//it found b in line:8
//then it give it to myfunc2() and it prints it

//so here we can say myfunc2() is "present in the lexicle enviorement of myfunc1()"
//and simillarly we can say myfunc1() is "present in the lexicle enviorement of GEC(global execution context)"


//so  heirarchy of acessing varible is
//    GEC-------->myfunc1()------->myfunc2()(child can acess all varibales of its parents)
//    parents...(n geneations)... child   

//bachhe ka papa,dada, pardada......... sabki sampatti par kabja hai
// par papa ka unke bachoo ki samaptti kabja nahi hai

// see also(for me)
// 1. call stack while executing 
// 2. window object is same as GEC or not