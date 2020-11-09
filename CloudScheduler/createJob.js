async function createJob(req, res) {
    const scheduler = require('@google-cloud/scheduler');
    const client = new scheduler.CloudSchedulerClient();

    const payload = {
        name: "Dipesh Das",
        dept: "EEE"
    };

    const project = 'teleport-intern-dinesh';
    const location = 'us-central1';
    const parent = client.locationPath(project, location);
    const job = {
        appEngineHttpTarget: {
            /*appEngineRouting: {
                service: "my-service"
            },*/
            relativeUri: '/handleJob',
            body: Buffer.from(JSON.stringify(payload)).toString('base64')
        },
        schedule: '* * * * *',
        timeZone: 'America/Los_Angeles'
    }

    const request = {
        parent: parent,
        job: job,
    };
    const [response] = await client.createJob(request);
    console.log(`Created job: ${response.name}`);
    res.send({ "response": response, "task": request.task });
}

module.exports = createJob;