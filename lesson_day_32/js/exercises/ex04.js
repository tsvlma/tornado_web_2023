const taskStatus = new Promise ((resolve, reject) => {
    setTimeout(()=> {
        if (taskId > 0) {
            resolve(`Task ${taskId} completed successfully.`);
        } else {
            reject(`Invalid Task ID: ${taskId}`);
        }
    },1000);
});

async function callMyPromise (){
    try {
        const res = await taskStatus;

        console.log(res);
    } catch (err) {
        console.error(err);
    }
}

callMyPromise();