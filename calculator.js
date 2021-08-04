const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
const port = 3000;


app.get("/" ,(req, res) =>{
    res.sendFile(__dirname + "/index.html");
});
function calculate(number1, number2, operation){
    switch (operation){
        case 'Addition':
            return number1 + number2;
            break;
        case 'Multiplication':
            return number1 * number2;
            break;
        case 'Division':
            return number1 / number2;
            break;
        case 'Subtraction':
            return number1 - number2;
            break;
        case 'Modulus':
            return number1 % number2;
            break;
    }   
}
app.post("/", (req, res) =>{
    
    console.log();
    res.send("The answer is "+ calculate(Number(req.body.number1), Number(req.body.number2), req.body.operations));
})
app.listen(port, () => {
    console.log(`Server successfully started at ${port}`);
});