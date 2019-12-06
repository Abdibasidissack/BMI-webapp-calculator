const express = require("express");
const bodyPerser = require("body-parser");

const app = express();

app.use(bodyPerser.urlencoded({extended : true}));

// home page

app.get("/",function(req,res)
{
   res.sendfile(__dirname + "/BMI.html")
});

app.post("/bmiCalculator", function(req,res)
{
    var weight =Number(req.body.weight);
    var height = Number(req.body.height);

    var result = (weight/(Math.pow(height,2)));

    res.send("Your body mass index is =  " + Math.round(result));
});

app.listen(3000, function()
{
    console.log("Server listening on port 3000")
});