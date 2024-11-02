//
function showEnd(){//call back method
    console.log("Game Over!");
}

console.log('started')
setTimeout(showEnd,3000)
console.log('started')
setTimeout(showEnd,3000)
console.log('started')
setTimeout(showEnd,3000)

//creating cll back

var hello=function(data){//var hello=(data)=>{} like this alos we can write function
console.log("printing"+data)
}

var hey=function(callback){
    callback("helloooooooooooooo")
}
//calling callback
hey(hello)