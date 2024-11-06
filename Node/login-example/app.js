const express = require('express')
const session= require('session')
const bodyParser=require('body-parser')
const path=require('path')

const app = express()
//middleware
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}))
//set up a static directory for serving
app.use(express.static(path.join(__dirname,"public")))

//dummy credentials
const users={
    username:"user",
    password:"pass"
}


app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.send(`<h1>Welcome ${req.session.username}</h1>`);
    } else {
        res.sendFile(path.join(__dirname, "public", "login.html"));
    }
});

app.post('/login',(req,res)=>{
    const {username,password}=req.body
    if(username==users.username && password==users.password){
        req.session.loggedIn=true
        req.session.username=username;
        res.redirect("/")
        }else{
            res.send("Invalid username or password")
    }
})

app.get('\logout',(req,res)=>{
    req.session.destroy(err)=>{
        if(err){
            return res.status(400).send(err)
            }
    }
})

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);//can give any number as port
});