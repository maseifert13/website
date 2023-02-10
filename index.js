
const express = require("express");
const app = express();
const router = express.Router();
const port = 5002


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});

app.get("/", function(req, res){
	res.sendFile('index.html', {root: __dirname});  
});

app.get("/about", function(req, res){
	res.send("About page")
});

app.get("/scripts/getWeather.js", function(req, res){
	res.sendFile('/scripts/getWeather.js', {root: __dirname});  
})

app.get("/images/IMG_0964.png", function(req, res){
	res.sendFile('/images/IMG_0964.png', {root: __dirname});  
})