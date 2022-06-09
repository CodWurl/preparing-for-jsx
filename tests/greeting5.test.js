import greetings from '../index';

const {
	greeting5,
} = greetings;

test('greeting5() returns array of parameters', () => {
	const test = greeting5('test1', 'test2');
	expect(Array.isArray(test)).toBe(true);
	expect(test[0]).toBe('test1');
	expect(test[1]).toBe('test2');
});