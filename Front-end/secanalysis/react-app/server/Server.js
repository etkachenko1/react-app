const express = require("express")
const path = require("path")
var bodyParser = require("body-parser")
var cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

let surveys = {};

app.post("/doasurvey", (req, res)=>{

	if(req.body in surveys){
		surveys[req.body].push(req.body.data)
		console.log(surveys)
	}else {
		surveys[req.body] = []
		surveys[req.body].push(req.body.data)
	}res.end()
})

app.get("/surveyinfo", (req, res)=>
{
	if(surveys[req.params]===undefined){
		res.json([])
	}else{
		res.json(surveys[req.params])
	}
})

app.get("/", (req, res) =>{
	res.send("Test")
})
const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port)
