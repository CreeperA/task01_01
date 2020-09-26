function MyPromise (fn) {
    let self = this;
    this.value = null; // 存储resolve数据
    this.status = 'pending'; // 存储状态
    this.err = null; // 存储reject错误信息
    this.onFulfilledArr = []; // 存储将要执行的resolve函数
    this.onRejectedArr = []; // 存储将要执行的reject函数
    function resolveFn (val) { // resolve()时执行的函数
      if (self.status === 'pending') { // 只用pending状态才能继续进行
        self.value = val; // 存储数据
        self.status = 'fulfilled'; // 改变状态
        // 逐个调用then()函数
        self.onFulfilledArr.forEach(function(thenFn) {
            thenFn(self.value);
        });
      }
    }
    function rejectFn(errMsg) { // reject()时执行的函数
      if (self.status === 'pending') {
        self.err = errMsg;
        self.status = 'rejected';
         self.onRejectedArr.forEach(function(catchFn) {
          catchFn(self.err);
        });
      }
    }
    try {
      fn(resolveFn, rejectFn);
    } catch (e) {
      rejectFn(e);
    }
  }
  MyPromise.prototype.then = function(onFulfilled, onRejected) {
    // 如果当前处于pending状态，就将函数压入对应数组
    console.log(this);
    var self = this;
    if (self.status === 'pending') {
      self.onFulfilledArr.push(onFulfilled);
      self.onRejectedArr.push(onRejected);
    }
    // fulfilled状态就执行onFulfilled()方法
    if (self.status === 'fulfilled') {
      onFulfilled(self.value);
    }
    // onFulfilled状态就要执行onRejected()函数
    if (self.status === 'rejected') {
      onRejected(self.err);
    }
    return this; // return this是链式调用关键
  };
  let p = new MyPromise(function (resolve,reject) {
        resolve(100);
    });
p.then(result =>{console.log(result)});
