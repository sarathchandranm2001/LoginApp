const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
}));

// Set up a static directory for serving
app.use(express.static(path.join(__dirname, "public")));

// Dummy credentials
const users = {
    username: "user",
    password: "pass"
};

// Route for home page
app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.send(`<h1>Welcome ${req.session.username}</h1>`);
    } else {
        res.sendFile(path.join(__dirname, "public", "login.html"));
    }
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === users.username && password === users.password) {
        req.session.loggedIn = true;
        req.session.username = username;
        res.redirect("/");
    } else {
        res.send("Invalid username or password");
    }
});

// Logout route
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(400).send(err);
        }
        res.redirect('/');
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
