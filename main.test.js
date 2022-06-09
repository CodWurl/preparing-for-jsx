import greetings from './index';

const {
	greeting,
	greeting2,
	greeting3,
	greeting4,
	greeting5,
	greeting6,
	greeting7,
	greeting8,
	greeting9
} = greetings;

test('greeting() returns "hello declaration"', () => {
	const test = greeting();
	expect(test).toBe('hello declaration');
});

test('greeting2() returns "hello expression"', () => {
	const test = greeting2();
	expect(test).toBe('hello expression');
});

test('greeting3() returns "hello arrow"', () => {
	const test = greeting3();
	expect(test).toBe('hello arrow');
});

test('greeting4() returns "hello declaration"', () => {
	const test = greeting4('test');
	expect(test).toBe('test');
});

test('greeting5() returns array of parameters', () => {
	const test = greeting5('test1', 'test2');
	expect(Array.isArray(test)).toBe(true);
	expect(test[0]).toBe('test1');
	expect(test[1]).toBe('test2');
});

test('greeting6() returns "HELLO personName"', () => {
	const test = greeting6('hello ', 'world');
	expect(test).toBe('HELLO world');
});

test('greeting7() returns "hello"', () => {
	const test = greeting7();
	expect(test).toBe('hello');
});

test('greeting8() returns "hello, personName"', () => {
	const test = greeting8('hello', 'world')
	expect(test).toBe('hello, world');
});

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