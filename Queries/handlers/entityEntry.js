const datastore = require('./datastore');
//const obj = [];

async function dataInput(req, res){
    const taskKey1 = datastore.key(['User', '1']);
    const entity1 = {
        key: taskKey1,
        data: {
            name: "Dipesh Das",
            id: 1,
            dept: "EEE",
            gpa: 8.2
        }
    };
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
            id: 4,
            dept: "ECE",
            gpa: 6.9
        }
    };
    const taskKey5 = datastore.key(['User', '5']);
    const entity5 = {
        key: taskKey5,
        data: {
            name: "Stewart Drake",
            id: 5,
            dept: "EEE",
            gpa: 7.0
        }
    };
    const taskKey6 = datastore.key(['User', '6']);
    const entity6 = {
        key: taskKey6,
        data: {
            name: "Miles Holmes",
            id: 6,
            dept: "ECE",
            gpa: 8.9
        }
    };const taskKey7 = datastore.key(['User', '7']);
    const entity7 = {
        key: taskKey7,
        data: {
            name: "Kagome Len",
            id: 7,
            dept: "ECE",
            gpa: 9
        }
    };

    const batch = [entity1, entity2, entity3, entity4, entity5, entity6, entity7];
    await datastore.upsert(batch);
    res.send("Batch operation Done!");
}

async function dataRetrieval(req, res){
    const taskKey1 = datastore.key(['User', '1']);
    const taskKey2 = datastore.key(['User', '2']);
    const taskKey3 = datastore.key(['User', '3']);
    const taskKey4 = datastore.key(['User', '4']);
    const taskKey5 = datastore.key(['User', '5']);
    const taskKey6 = datastore.key(['User', '6']);
    const taskKey7 = datastore.key(['User', '7']);
    const keys = [taskKey1, taskKey2, taskKey3, taskKey4, taskKey5, taskKey6, taskKey7];
    const entity = await datastore.get(keys);
    console.log(entity);
    res.send(entity);
};

module.exports.dataInput = dataInput;
module.exports.dataRetrieval = dataRetrieval;
