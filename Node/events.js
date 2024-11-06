const EventEmitter=require("events")
const emitter=new EventEmitter();
const v1="logged i"
emitter.on("message",(data)=>{
    console.log(data)
})
emitter.on("logout",(data)=>{
    console.log(data)
})
emitter.emit("message","user logged in")
emitter.emit("logout","user logged out")