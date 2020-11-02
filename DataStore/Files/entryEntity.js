const { Datastore } =  require('@google-cloud/datastore');
const datastore= new Datastore();

async function input(req, res) {
    const taskKey = datastore.key(['User', '1']);
    const entity = {
        key: taskKey,
        data: {
            name: "Dipesh Das",
            id: 1,
            dept: "EEE",
            gpa: 8.2
        }
    };
    datastore.insert(entity).then(() =>{
        res.send("Done!");
    }).catch(()=>{
        res.send("Failed!")
    });
};

async function retrieval(req, res) {
    const taskKey = datastore.key(['User', '1']);
    const entity = await datastore.get(taskKey);
    res.send(entity);
};

module.exports.input = input;
module.exports.retrieval = retrieval;

