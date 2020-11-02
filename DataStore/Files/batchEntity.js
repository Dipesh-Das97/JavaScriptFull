const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();

async function batchInput(req, res) {
    const taskKey2 = datastore.key(['User', '2']);
    const entity2 = {
        key: taskKey2,
        data: {
            name: "Millie Moore",
            id: 2,
            dept: "EEE",
            gpa: 7.9
        }
    };
    const taskKey3 = datastore.key(['User', '3']);
    const entity3 = {
        key: taskKey3,
        data: {
            name: "Emily Jones",
            id: 3,
            dept: "ECE",
            gpa: 8.45
        }
    };
    const taskKey4 = datastore.key(['User', '4']);
    const entity4 = {
        key: taskKey4,
        data: {
            name: "John Marks",
            id: 1,
            dept: "ECE",
            gpa: 6.9
        }
    };

    const batch = [entity2, entity3, entity4];
    await datastore.upsert(batch);
    res.send("Batch operation Done!");
};

async function batchRetrieval(req, res) {
    const taskKey2 = datastore.key(['User', '2']);
    const taskKey3 = datastore.key(['User', '3']);
    const taskKey4 = datastore.key(['User', '4']);
    const keys = [taskKey2, taskKey3, taskKey4];
    //const taskKey = datastore.key(keys);
    const entity = await datastore.get(keys);
    res.send(entity);
};

module.exports.batchInput = batchInput;
module.exports.batchRetrieval = batchRetrieval;