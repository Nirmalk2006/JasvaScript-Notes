
        //  promise is a object in a javascript which represent a future task of an Asynchronous function
        // there are three states of promise
        // 1. Pending: Still Working, neither fulfilled nor rejected.
        // 2. Fulfilled: meaning that the operation completed successfully.
        // 3. Rejected: meaning that the operation failed.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promised Consumed");
    resolve();
  },2000)
})
promise.then(() => {
  console.log("Promise Resolved");
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout((user) => {
        resolve({user: "John", age: 30});
    }, 2000)
    reject("Error: User not found");
    }).then((user)=>{
        console.log(user)
    })

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(user = { user: "John", age: 30 });
    }, 2000);
});

promise3
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
