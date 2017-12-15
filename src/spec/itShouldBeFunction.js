
import method from '../index';

test('It should be function', () => {
  expect(typeof method).toBe('function');
});


console.log(method(31536000+2625000+604110+86300+3600+60+1));