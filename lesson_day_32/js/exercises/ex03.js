function addRandomNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout (()=> {
            resolve("");
        },1000);
        if (number % 4 == 0) {
            resolve('Even Number');
        } else {
            reject('Odd Number');
        }
        Math.floor,Math.random()*10
    });
}


async function callMyPromise() {
    try {
        const res = await addRandomNumber;

        console.log(res);
    } catch (error) {
        console.error(err);
    }
}

callMyPromise();