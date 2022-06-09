import greetings from '../index';

const {
	greeting3,
} = greetings;

test('greeting3() returns "hello arrow"', () => {
	const test = greeting3();
	expect(test).toBe('hello arrow');
});