/* eslint
no-tabs: 0,
no-console: 0
*/
import convert, { calculate, toSingular } from '../index';

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

test('toSingular function should turn a noun to singular form', () => {
	expect(toSingular('tables')).toEqual('table');
});

test('toSingular function  should return a string', () => {
	expect(typeof toSingular('tables')).toEqual('string');
});


console.log(convert('315360545'));