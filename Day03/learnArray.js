//array concept

let array = ["chrome", "firefox", "edge"]
console.log(array)

//lenght of array
console.log(array.length);
// add at last
array.push("safari")
console.log(array)
// add at first
console.log(array.unshift("IE"))
console.log(array)

//using splice
let array1 = ["1","2","3"]
array1.splice("1","2","4")
console.log(array1)
 // indexof
 console.log(array.indexOf("chrome"));

// splice
let array2 = ["chrome", "edge", "firefox", "IE"]
array2.splice(1, 2, "safari")
console.log(array2)
console.log(array2.includes("edge"));




 




