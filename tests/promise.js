//In this is scripts it will invoke resolve/pass or reject/fail based on their calling

//1. Navigating to application
let p1 =new Promise((resolve,reject)=> {
    setTimeout(() => {
             console.log("Launch the browser");
            reject("Issue while launching browser");
            resolve("Browser launched");
    },2000);
})

//2. Login to application
let p2 = new Promise((resolve,reject)=> {
    setTimeout(() => {
        console.log("User loged in");
        reject("Invalid credentials");
        resolve("user has been logged in successfully");
    }, 2000);
})

let p3= new Promise((resolve,reject)=>{
            setTimeout(() => {
                console.log("Home page");
                reject("Issue while login so user didn't navigated to home page");
                resolve("User successfully navigated to home page");
            }, 2000);
        })

//all method of Pomise will accept the array of promises and will return a single promise
//here if all the 3 promises from the array are successfully executed then only then will be triggered or 
//else it will trigger catch(if any one of the array promise is failed)
//and the msg paramerter will have arry of all the then n catch passed msg for every promise in an array
Promise.all([p1,p2,p3]).then((msg)=>{console.log(msg)}).catch((msg)=>{console.log(msg)});

// .catch((msg)=>{console.log(msg)})

//any method of Pomise will accept the array of promises and will return a single promise
//here if all the 3 promises from the array are failed then only catch will be triggered or 
//else it will trigger then(if any one of the array promise is passed)
//and it will give the msg of which ever is passed in then or if failed then which ever is failed its msg 
//will be given in catch
// Promise.any([p1,p2,p3]).then((msg)=>{
//     console.log(msg);
// }).catch((msg)=>{
//     console.log(msg);
// })
// promise chaining (after navigating to application only login should be done)
//  We can pass the 2nd promise in the 1st then only
//promise1
/*let promise1= new Promise((resolve,reject)=> {
    setTimeout(() => {
        console.log("*********** Below us promise chaining ***********");
        console.log("Navigated to app");
        resolve("Successfully navigated");
        reject("Issue while navigating");
    }, 2000);
}).then((msg)=>{
    console.log(msg);
})
.catch((msg)=>{
    console.log(msg);
})
promise1.then(()=>{
    //promise2
    let promise2= new Promise((pass,fail)=>{
        setTimeout(() => {
            console.log("Logged in");
            pass("Successfully logged in");
            fail("Invalid credentials");
        }, 2000);
    }).then((msg)=>{
        console.log(msg);
    })
    .catch((msg)=>{
        console.log(msg);
    })
    .then(()=>{
        //promise3
        let promise3= new Promise((p,f)=>{
            setTimeout(() => {
                console.log("Home page");
                p("User successfully navigated to home page");
                f("Issue while login so user didn't navigated to home page");
            }, 2000);
        }).then((msg)=>{
            console.log(msg);
        })
        .catch((msg)=>{
            console.log(msg);
        })
    })
})*/