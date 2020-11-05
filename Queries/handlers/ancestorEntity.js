const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore({apiEndpoint: 'http://localhost:8081'});
async function ancestor(req, res){
    const key1 =  datastore.key(['User', '1', 'Task', '1']);
    const entity1 = {
        key : key1,
        data : {
            name : "Sahil Das",
            id : 1,
            dept : "EEE",
            gpa : 7.5
        }
    };
    const key2 =  datastore.key(['User', '1', 'Task', '2']);
    const entity2 = {
        key : key2,
        data : {
            name : "Milly Das",
            id : 2,
            dept : "ECE",
            gpa : 9
        }
    };
    const key3 =  datastore.key(['User', '1', 'Task', '3']);
    const entity3 = {
        key : key3,
        data : {
            name : "Milly Das",
            id : 3,
            dept : "EEE",
            gpa : 8.0
        }
    };

    const entities = [entity1, entity2, entity3];

    datastore.insert(entities).then(() =>{
        res.send("Done!");
    });
}

async function retrieval(req, res) {
    const taskKey1 = datastore.key(['User', '1', 'Task', '1']);
    const taskKey2 = datastore.key(['User', '1', 'Task', '2']);
    const taskKey3 = datastore.key(['User', '1', 'Task', '3']);
    const keys = [taskKey1, taskKey2, taskKey3]
    const entities = await datastore.get(keys);
    console.log(entities);
    res.send(entities);
};

module.exports.ancestor = ancestor;
module.exports.retrieval = retrieval;