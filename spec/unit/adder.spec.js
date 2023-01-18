const sumador = require("../../services/adder");

describe("Test de suma", function () {
	let _numberA;
	let _numberB;

	it("Debería de devolver la suma entre numberA y numberB", function () {
		_numberA = 4;
		_numberB = 7;

		const result = sumador.add(_numberA, _numberB);

		expect(result).toEqual(11);
	});
});
