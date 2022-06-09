import greetings from '../index';

const {
	greeting4,
} = greetings;

test('greeting4() returns "hello declaration"', () => {
	const test = greeting4('test');
	expect(test).toBe('test');
});