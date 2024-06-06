let promise1 = new Promise((resolve, reject) => {
    // some task
    setTimeout(() => {
        // console.log("The task is completed");
        resolve()
    }, 1000);
})

promise1.then(() => {
    // console.log("promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("task 2");
        resolve()
    }, 1000);
}).then(() => {
    // console.log("new promise consumed");
})

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "sujit", email: "sujitbarnawal4545@gmail.com" })
    }, 1000);
})

promise3.then((user) => {
    // console.log(user);
    // console.log(user.username,user.email);
})


let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "sujit", email: "sujitbarnawal4545@gmail.com", password: "0000" })
        } else {
            reject("Error occured")
        }
    }, 1000);
})

promise4
    .then((user) => {
        // console.log(user);
        return user.username
    })
    .then((username) => {
        // console.log(username);
    })
    .catch((error) => {
        // console.log(error);
    })
    .finally(() => {
        // console.log("The promise was either  resolved or rejected");
    })


let promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "ankit", password: 1111 })
        } else {
            reject("Error 5 occured")
        }
    }, 1000);
});

// handling promises using async await

async function consumePromise5() {
    try {
        let response = await promise5
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}
consumePromise5();



// (async function getAllUsers() {
//     try {
//         let response = await fetch("https://jsonplaceholder.typicode.com/users")
//         let data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// })()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("The promise is either resolved or rejected"))