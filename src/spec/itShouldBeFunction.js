/* eslint
no-tabs: 0,
no-console: 0
*/
import convert, { calculate, subtractUsedSeconds } from '../index';

test('convert method should be a function', () => {
  expect(typeof convert).toBe('function');
});

test('convert method should return a string', () => {
  expect(typeof convert(123)).toEqual('string');
});

test('calculate function should return a number', () => {
	expect(typeof calculate(1, 2)).toEqual('number');
});

test('calculate function should calculate the time unit', () => {
	expect(calculate(1, 2)).toEqual(Math.floor(1 / 2));
});

test('subtractUsedSeconds should subtract seconds correctly', () => {
	expect(subtractUsedSeconds(105, 2)).toEqual(103);
});

test('It should parse 1 correctly', () => {
  expect(convert(1)).toBe('1 second');
});

test('It should parse 47 correctly', () => {
  expect(convert(47)).toBe('47 seconds');
});

test('It should parse 2700 correctly', () => {
  expect(convert(2700)).toBe('45 minutes');
});

test('It should parse 284400 correctly', () => {
  expect(convert(284400)).toBe('3 days, 7 hours');
});

test('It should parse 675455 correctly', () => {
  expect(convert(675455)).toBe('1 week, 19 hours, 37 minutes, 35 seconds');
});

test('It should parse 3562109 correctly', () => {
  expect(convert(3562109)).toBe('1 month, 1 week, 4 days, 5 hours, 28 minutes, 29 seconds');
});

test('It should parse 56701390 correctly', () => {
  expect(convert(56701390)).toBe('1 year, 9 months, 3 weeks, 6 hours, 23 minutes, 10 seconds');
});

console.log(convert('90000'));

