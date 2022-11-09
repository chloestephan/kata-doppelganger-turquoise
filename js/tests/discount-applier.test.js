const test = require("tape");
const discountApplier = require("../discount-applier");

test("should throws an error in the loop", (t) => {
	// TODO: write a test that fails due to the bug in
	// DiscountApplier.applyV1
	//given

	const awaitedresult = new Error("Initial loop cp wrong");
	var notifier = {
		user: "",
		message: "",
		notify: (user, message) => console.log(user + " : " + message),
	};
	const tab = ["Tom", "Nike", "Gean", "Worf", "Shield"];
	const discount = 10;

	//When
	const discountApp = new discountApplier(notifier);
	const result = discountApp.applyV1(discount, tab);

	class testV1 {
		testV1fn(discount, users) {
			console.log("Here are what we expected \n");
			//let i = 0 to get expected results
			for (let i = 1; i < users.length; i++) {
				const message = `You've got a new discount of ${discount}`;
				const user = users[0];
				console.log(user + " : " + message);
			}
		}
	}

	const testv1 = new testV1();
	const expected = testv1.testV1fn(discount, tab);

	//Then

	t.equal(result, expected);
	t.end();
});

test("apply v2", (t) => {
	// TODO: write a test that fails due to the bug in
	// DiscountApplier.
	//given

	//When

	//Then
	t.end();
});
