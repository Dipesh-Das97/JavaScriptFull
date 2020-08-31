const promises = require('./asyncAwait');

test('Resolving', async () => {
    const data = await promises();
    expect(data).toBe('Success');
  });
  
/*test('Rejected', async () => {
    expect.assertions(1);
    try {
      await promises();
    } catch (e) {
      expect(e).toMatch('Failed');
    }
  });*/