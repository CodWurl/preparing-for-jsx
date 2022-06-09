import greetings from '../index';

const {
	greeting8,
} = greetings;

test('greeting8() returns "hello, personName"', () => {
	const test = greeting8('hello', 'world')
	expect(test).toBe('hello, world');
});