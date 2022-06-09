import greetings from '../index';

const {
	greeting2,
} = greetings;

test('greeting2() returns "hello expression"', () => {
	const test = greeting2();
	expect(test).toBe('hello expression');
});