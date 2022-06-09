import greetings from '../index';

const {
	greeting6,
} = greetings;

test('greeting6() returns "HELLO personName"', () => {
	const test = greeting6('hello ', 'world');
	expect(test).toBe('HELLO world');
});