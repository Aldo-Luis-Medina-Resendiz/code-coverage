const express = require("express");
const bodyParser = require("body-parser");
const adder = require("./services/adder");
//const substractor = require("./services/substractor");
//const multiplier = require("./services/multiplier");
//const divider = require("./services/divider");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/add", function (req, res) {
	res.send(
		handleCalculatorRequest(adder.add, req.query.numberA, req.query.numberB)
	);
});

/*app.get("/substract", function (req, res) {
	res.send(
		handleCalculatorRequest(
			substractor.substract,
			req.query.numberA,
			req.query.numberB
		)
	);
});

app.get("/multiply", function (req, res) {
	res.send(
		handelCalculatorRequest(
			multiplier.multiple,
			req.query.numberA,
			req.query.numberB
		)
	);
});

app.get("/divide", function (req, res) {
	res.send(
		handelCalculatorRequest(
			divider.divide,
			req.query.numberA,
			req.query.numberB
		)
	);
});
*/
app.listen(3000);
module.exports = app;

function handleCalculatorRequest(func, numberA, numberB) {
	var numberA = parseInt(numberA);
	var numberB = parseInt(numberB);
	var result = func(numberA, numberB);

	if (result) {
		return result.toString();
	}

	throw "Error de cálculo";
}
