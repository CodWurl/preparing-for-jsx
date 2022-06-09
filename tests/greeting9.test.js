import greetings from '../index';

const {
	greeting9,
} = greetings;

test('greeting9() returns "hello declaration"', () => {
	const weekDaysLower = [
		"monday",
		"tuesday",
		"wednesday",
		"thursday",
		"friday",
	]
	const test = greeting9(weekDaysLower);
	expect(Array.isArray(test)).toBe(true);
	expect(test.length).toBe(weekDaysLower.length);
	for (let i = 0; i < test.length; i++) {
		expect(test[i].toLowerCase()).toBe(weekDaysLower[i]);
	}
});