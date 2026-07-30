//Funtion
// Parameterization
// no agreement
function greet(username){
    console.log(`hi ${username}, welcome`);
    
    }greet("thameem")

    //Funtion expression
    let addnum = function(a,b){
        let c = a+b
        return c
    } 
    console.log(addnum(10,20/2));

    //arrow function
    let add = (a,b)=>a+b
    console.log(add(10,30))

    //IIFE
    ;(function(username){
        console.log(`the username is ${username}`);
        
    })("thameem");
    
    
    
   
    
