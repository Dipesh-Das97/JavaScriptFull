const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();
const DatastoreEmulator = require('google-datastore-emulator');
const datastoreEmulator = new DatastoreEmulator({
    projectId: 'telport-intern-dinesh',
    storeOnDisk: false,
    clean: true,
});

async function credInput(){
    const taskKey = datastore.key(['User', '1']);
    const entity = {
        key : taskKey,
        data : {
            name : "Dipesh Das",
            id : 1,
            dept : "EEE",
            gpa : 8.2
        }
    };
    await datastore.upsert(entity);
    //console.log(entity);
    return entity.data.name;
}

async function retrieve(){
    const key = datastore.key(['User', '1']);
    const object = datastore.get(key);
    return object.data.name;
};

module.exports.credInput = credInput;
module.exports.retrieve = retrieve;

