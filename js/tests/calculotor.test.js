const test = require("tape");
const Calculator = require("../calculator");

test("should throw when not authorized", (t) => {
	// TODO: write a test that fails due to the bug in
	// Calculator.divide()

	// Should fail because calculator.divide() will not work when the authorizer is true.

	// Given
	const param = new Object();
	param.authorize = () => false;

	const awaitedResult = new Error("Not authorized");

	// When
	const calculator = new Calculator(param);
	const result = calculator.divide(4, 2);

	// Then
	t.equal(result, awaitedResult);

	t.end();
	/*
  Failed Tests: There was 1 failure should throw when not authorized × should be strictly equal

  total:     1
  passing:   0
  failing:   1
  duration:  237ms
  */
});
