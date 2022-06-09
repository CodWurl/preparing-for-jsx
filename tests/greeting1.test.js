import greetings from '../index';

const {
	greeting,
} = greetings;

test('greeting() returns "hello declaration"', () => {
	const test = greeting();
	expect(test).toBe('hello declaration');
});