let a = "Listen".toLowerCase()
let b = "Silent".toLowerCase()

let c = a.split("").sort().join("");
let d = b.split("").sort().join("");
console.log(c);
console.log(d);

if(c===d){
    console.log(true);
}