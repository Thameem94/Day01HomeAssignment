//Example 1
let string = "Hello World"
statement = string.slice(6,11)
console.log(statement)
console.log(statement.length)


//Example 2

 s =  "   fly me   to   the moon  "

function lengthOflastword(s){

return s.trim().split(/\s+/).pop().length;

}console.log(lengthOflastword(s));

//example 3
 let a = 'listen'
 let b = 'silent'

 let c = a.split("").sort().join("")
 let d = b.split("").sort().join("")

 if(c===d){
    console.log("true")
 }else{
console.log("false")  
 }

 //Example 3 
 let main= 'hello'
 let new1 = 'world'

 let res =main.split("").sort().join("")
 let res1 = new1.split("").sort().join("")

 if (res===res1){
    console.log("true")
 }else{
    console.log("false")
 }



