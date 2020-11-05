function main(
    project = 'teleport-intern-dinesh', 
    queue = 'dinesh-queue', 
    location = 'us-central1',
    payload = 'Hello, World!', 
    inSeconds = 15 // Delay in task execution
) {
    const { CloudTasksClient } = require('@google-cloud/tasks');
    const client = new CloudTasksClient({ apiEndpoint: 'http://localhost:8081' });

    async function createTask() {
        const project = 'teleport-intern-dinesh';
        const queue = 'dinesh-queue';
        const location = 'us-central1';
        const payload = 'We can do this!';

        const parent = client.queuePath(project, location, queue);
        const task = {
            appEngineHttpRequest : {
                httpMethod : 'POST',
                relativeUri : '/task'
            }
        };

        if(payload){
            task.appEngineHttpRequest.body = payload//Buffer.from(payload).toString('base64');
        }

        if(inSeconds){
            task.scheduleTime = {second : inSeconds};
        }

        console.log("Sending Task: ");
        console.log(task);

        const request = {parent, task};
        const response = await client.createTask(request);
        const name = response.name;
        console.log(`Created task : ${name}`);


    }
    createTask();
    // [END cloud_tasks_appengine_create_task]
}

/*process.on(unhandledRejection, err => {
    console.error(err.message);
    process.exitCode = 1;
});*/

main();
