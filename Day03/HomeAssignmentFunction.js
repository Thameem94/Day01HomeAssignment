//Task :  Function Declaration
function userprofile(name){
    console.log(`hello ${name}`);
    
}userprofile("Thameem")

//Task2:  Arrow Function
let double = (number) => number * 2
{
   console.log(double(2));
   
}

let add = (a,b) => {
    return (a+b)*2
}
console.log(add(2,2));

//Task3: Anonymous
setTimeout(function()
{
    console.log("This message is delayed by 2 seconds");

}, 2000);


// callback funtion
function name(){
    console.log("Thameem");
}

function age(){
    console.log("32");
}

function getuserdata(delay, callback1, callback2){

    console.log("Fetching my data");

    setTimeout(function(){

        callback1();
        callback2();

    }, delay);

}

getuserdata(3000, name, age);