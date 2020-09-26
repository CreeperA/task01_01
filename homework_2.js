const p1 = new Promise((resolve, reject) => {
    resolve('hello ');
}).then(result => result);
const p2 = new Promise((resolve, reject) => {
    resolve('lagou ');
}).then(result => result);
const p3 = new Promise((resolve, reject) => {
    resolve('I love u');
}).then(result => result);
Promise.all([p1,p2,p3]).then(result =>{
    let result_str = result.toString().replace(/,/g,'');
    console.log(result_str);
});