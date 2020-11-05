const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore({apiEndpoint: 'http://localhost:8081'});
async function ancestor(req, res){
    const path = ['User', '9', 'Task', '2'];
    const key1 =  datastore.key(path);
    const entity2 = {
        key : key1,
        data : {
            name : "Sahil Das",
            id : 3,
            dept : "EEE",
            gpa : 7.5
        }
    };
    datastore.insert(entity2).then(() =>{
        res.send("Done!");
    });
}

async function retrieval(req, res) {
    const taskKey2 = datastore.key(['User', '9', 'Task', '2']);
    const entity = await datastore.get(taskKey2);
    console.log(entity);
    res.send(entity);
};

module.exports.ancestor = ancestor;
module.exports.retrieval = retrieval;