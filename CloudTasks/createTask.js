async function createTask(req, res){
    const { CloudTasksClient } = require('@google-cloud/tasks');
    const client = new CloudTasksClient();
    const project = 'teleport-intern-dinesh';
    const location = 'us-central1';
    const queue = 'dinesh-queue';
    const payload = {
        name: "Dipesh Das",
        dept: "EEE"
    };
    const inSeconds = 15;
    const parent = client.queuePath(project, location, queue);
    const task = {
        appEngineHttpRequest: {
            httpMethod: 'POST',
            relativeUri: '/task',
            body: payload,
        },
        scheduleTime: { inSeconds }
    };

    const request = {
        parent: parent,
        task: task
    };

    const [response] = await client.createTask(request);
    res.send({ "response": response, "task": task });
}

module.exports.createTask = createTask;
