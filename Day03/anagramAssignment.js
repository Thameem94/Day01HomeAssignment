

//sorting
let a = "listen"
let b = "silent"

 c = a.split("").sort().join("");
 d = b.split("").sort().join("");
 console.log(c);
 console.log(d);
 
if (c===d){
    console.log("true");
    
}else {
    console.log("false")
}

//lowercase
let value1 = "Listen"
let value2 = "Silent"

value3 = value1.toLowerCase().split("").sort().join("");
value4 = value2.toLowerCase().split("").sort().join("");
console.log(value3);
console.log(value4);

if (value3===value4) {
    console.log("true");
    
}else{
    console.log("false");
    
}


// hello world
let program1 = "hello"
let program2 = "world"

program3 = program1.split("").sort().join("");
program4=program2.split("").sort().join("");

console.log(program3);
console.log(program4);

if (program3===program4){
    console.log("true");
  
}else
    {
        console.log("false");
        
    }

    //ignore space

    let i = "coversation"
    let j = "voices rant on"
    
i=i.toLowerCase().replace(/\s/g, "");
j=j.toLowerCase().replace(/\s/g, "");

n = j.split("").sort().join("");
n = j.split("").sort().join("");
console.log(m);
console.log(n);

if (m===n){
    console.log("true");
}else{
    console.log("false");
    
}
    

