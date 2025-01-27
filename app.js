/**{
const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 4000;

const app = express();

// Initialization
app.use(cookieParser());

app.use(session({
    secret: "ThisIsASecretZX",
    saveUninitialized: true,
    resave: true
}));


app.get('/', (req, res) => {
    if (req.session.view) {

        // The next time when user visits, 
        // he is recognized by the cookie 
        // and variable gets updated.
        req.session.view++;
        res.send("You visited this page for " 
            + req.session.view + " times");
    }
    else {

        // If user visits the site for
        // first time
        req.session.view = 1;
        res.send("You have visited this page"
           + " for first time ! Welcome....");
    }
})

// Host
app.listen(PORT, () =>
    console.log(`Server running at ${PORT}`));
}**/


//---------------------------------------------------------------------------//


const express = require("express") 
const session = require('express-session') 
const app = express() 
	
// Port Number Setup 
var PORT = process.env.port || 3000 

// Session Setup 
app.use(session({ 

	// It holds the secret key for session 
	secret: 'aVerySecretKey', 

	// Forces the session to be saved 
	// back to the session store 
	resave: true, 

	// Forces a session that is "uninitialized" 
	// to be saved to the store 
	saveUninitialized: true
})) 

app.get("/", function(req, res){ 
	
	// req.session.key = value 
	req.session.name = 'GeeksforGeeks'
	return res.send("Session Set") 
}) 

app.get("/session", function(req, res){ 

	var name = req.session.name 
	return res.send(name) 

	/* To destroy session you can use 
		this function 
	req.session.destroy(function(error){ 
		console.log("Session Destroyed") 
	}) 
	*/
}) 
	
app.listen(PORT, function(error){ 
	if(error) throw error 
	console.log("Server created Successfully on PORT :", PORT) 
}) 
