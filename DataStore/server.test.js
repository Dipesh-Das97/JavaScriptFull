const allFunc = require('./server');
const cred = allFunc.credInput;
const retrieve = allFunc.retrieve;
const DatastoreEmulator = require('google-datastore-emulator');
const datastoreEmulator = new DatastoreEmulator({
  projectId: 'telport-intern-dinesh',
  storeOnDisk: false,
  clean: true,
  useDocker : false
});

test('test suit', () => {
  process.env.GCLOUD_PROJECT = 'teleport-intern-dinesh'; // Set the datastore project Id globally
  beforeAll(() => {
    return datastoreEmulator.start();
  });

  expect(cred()).toEqual(retrieve());

  afterAll(() => {
    return datastoreEmulator.stop();
  });
})

