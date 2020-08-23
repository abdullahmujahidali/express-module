const express=require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+ "/index.html");
});

app.post("/",function(req,res){
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);

    var result= num1+num2;
    
    console.log(req.body.num2);

res.send("The result of calculation is: "+result);
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+ "/bmicalculator.html");
});

app.post("/bmiCalculator",function(req,res){
    
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    console.log(weight);
    console.log(height);

    var bmi= weight/(height*height);

    res.send("Your BMI is : "+bmi);
});


app.listen(3000,function(){
    console.log("Server is running on port 3000");
})
