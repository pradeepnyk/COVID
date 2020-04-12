var a = new Promise((resolve, reject) => {
    let a = 1;
    if(a==1){
        resolve('Success')
    }
    else{
        reject('Rejected')
    }
})

a.then((message) => {
    console.log('This is success message')
}).catch((error) => {
    console.log('This is error message')
})