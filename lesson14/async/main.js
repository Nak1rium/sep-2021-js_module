function wakeUp(isStudyingDay = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isStudyingDay) {
                resolve('Wake up at 6am');
            } else {
                reject('Wake up at 10am');
            }
        }, 600)
    });
}

function goEat(eat) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eat) {
                resolve(`Cooking ${eat}`);
            }
            reject('nothing to eat')
        }, 1000)
    });
}

function studying() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Studying');
        }, 4000)
    });
}

function goSleep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Sleep')
        }, 1000)
    })
}

wakeUp(true)
    .then(itsMorning => {
        console.log(itsMorning);

        return goEat('meat');
    })
    .then(eat => {
        console.log(eat);

        console.log('im eating now');

        return studying();
    })
    .then(studying => {
        console.log(studying);

        console.log('Done');

        return goEat();
    })
    .catch(eat => {
        console.log(eat);

        console.log('Im hungry');

        return goSleep();
    })
    .then(sleep => {
        console.log(sleep);
    })



