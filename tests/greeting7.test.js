import greetings from '../index';

const {
	greeting7,
} = greetings;

test('greeting7() returns "hello"', () => {
	const test = greeting7();
	expect(test).toBe('hello');
});