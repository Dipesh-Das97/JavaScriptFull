const promises = require('./promises');

test('the data is peanut butter', () => {
    //expect.assertions(1);
    return promises().then(data => {
      expect(data).toBe('Success');
    })//.catch(e => expect(e).toMatch('Failed'));
  });
