async function createTask(req, res) {
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
            relativeUri: '/handleTask',
            body: Buffer.from(JSON.stringify(payload)).toString('base64')
        },
        scheduleTime: {
            seconds: inSeconds + Date.now() / 1000,
        }
    };
    const request = {
        parent: parent,
        task: task
    };
    console.log('Sending app engine task:');
    console.log(task);
    const [response] = await client.createTask(request);
    console.log(`Created task ${response.name}`);
    res.send({ "response": response, "task": task });
}

module.exports.createTask = createTask;
