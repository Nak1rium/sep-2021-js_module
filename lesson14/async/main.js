//Promise

// function wakeUp(isStudyingDay = true) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isStudyingDay) {
//                 resolve('Wake up at 6am');
//             } else {
//                 reject('Wake up at 10am');
//             }
//         }, 600)
//     });
// }
//
// function goEat(eat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (eat) {
//                 resolve(`Cooking ${eat}`);
//             }
//             reject('nothing to eat')
//         }, 1000)
//     });
// }
//
// function studying() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Studying');
//         }, 4000)
//     });
// }
//
// function goSleep() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('Sleep')
//         }, 1000)
//     })
// }
//
// wakeUp(true)
//     .then(itsMorning => {
//         console.log(itsMorning);
//
//         return goEat('meat');
//     })
//     .then(eat => {
//         console.log(eat);
//
//         console.log('im eating now');
//
//         return studying();
//     })
//     .then(studying => {
//         console.log(studying);
//
//         console.log('Done');
//
//         return goEat();
//     })
//     .catch(eat => {
//         console.log(eat);
//
//         console.log('Im hungry');
//
//         return goSleep();
//     })
//     .then(sleep => {
//         console.log(sleep);
//     })

//Callback

// function wakeUp(cb) {
//     console.log('wakeup process');
//     setTimeout(() => {
//         cb(null, 'wake up done')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function takeASHOWER(cb) {
//     console.log('shower process');
//     setTimeout(() => {
//
//         cb(null, 'shower done')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function breakfast(haveTime ,cb) {
//     console.log('breakfast process');
//     setTimeout(() => {
//         if(haveTime===true){
//         return cb(null, 'breakfast done')
//         }return cb('have no time for brackfast')
//
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function runPc(cb) {
//     console.log('run pc');
//     setTimeout(() => {
//         cb(null, 'run  PC done')
//
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function homeWork(tasks,cb) {
//     console.log('homework process');
//     setTimeout(() => {
//         if(!(tasks>20)){
//
//           return   cb(null, ' homework done')
//         }return cb ('today we have a lot of tasks.CHILL IS CANCELED ')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
// function chill(cb) {
//     console.log(' chill process');
//
//     setTimeout(() => {
//         cb(null, 'chill done')
//     }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
// }
//
//
// wakeUp((err, data) => {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
//     takeASHOWER((err, data) => {
//         if (!err) {
//             console.log(data);
//         } else {
//             console.log(err);
//         }
//         breakfast(false,(err, data) => {
//             if (!err) {
//                 console.log(data);
//             } else {
//                 console.log(err);
//             }
//             runPc((err, data) => {
//                 if (!err) {
//                     console.log(data);
//                 } else {
//                     console.log(err);
//                 }
//                 homeWork(30,(err, data) => {
//                     if (!err) {
//                         console.log(data);
//                         chill((err, data) => {
//                             if (!err) {
//                                 console.log(data);
//                             } else {
//                                 console.log(err);
//                             }
//
//                         })
//                     } else {
//                         console.log(err);
//                     }
//
//
//                 })
//
//             })
//
//         })
//
//     })
// })


//ASYNC AWAIT

// function wakeUp() {
//     console.log('wakeup process');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('wake up done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//     })
//
// }
//
// function takeASHOWER() {
//     console.log('shower');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('shower process done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function breakfast(havetime) {
//     console.log('breakfast process');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (havetime === true) {
//                 resolve('breakfast done')
//             } else {
//                 resolve('have no time for brackfast')
//             }
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function runPc() {
//     console.log('run pc');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('running PC done')
//
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//     })
// }
//
// function homeWork(tasks) {
//     console.log('doing homework');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (tasks < 20) {
//                 resolve(' homework done')
//             } else {
//
//                 reject('today we have a lot of tasks.CHILL IS CANCELED')
//             }
//
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// function chill() {
//     console.log('chilling');
//
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('chilling done')
//         }, Math.floor(Math.random() * (3000 - 1000)) + 1000)
//
//     })
// }
//
// async function start() {
//     try {
//         let func = await wakeUp();
//         console.log(func);
//
//         func = await takeASHOWER();
//         console.log(func);
//
//         func = await breakfast(true);
//         console.log(func);
//
//         func = await runPc();
//         console.log(func);
//
//         func = await homeWork(40);
//         console.log(func);
//
//         func = await chill();
//         console.log(func);
//     } catch (err) {
//         console.log(err)
//     }
// }
//
// start();


