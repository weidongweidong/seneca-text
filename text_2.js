const seneca = require('seneca')();

//声明一个 服务 就是生产者，  
seneca.add({role:"math", cmd :"product" }, (msg, replay)=>{
  return replay(null, {answer  :  msg.left * msg.right});
})
// 如果有两个相同的 模式的 生产者， 那么就用后一个声明的函数；
seneca.add({role:"math", cmd :"product" }, (msg, replay)=>{
  return replay(null, {answer  :  msg.left - msg.right});
})




// 声明一个消费者， 就是调用生产者方法的  需求方
seneca.act({role:"math" , cmd :"product", left:2, right:4} , (err, result )=>{
  if(err){
    console.log("出现错误", err);
  }
  console.log(result);
}).act({role:"math", cmd : "product" , left:8 ,right :2 } , (err, result)=>{
  console.log(result)
});

// 还可以链式调用， 调式调用是顺序执行的，但是不是串行，所以，返回的结果的顺序可能与调用顺序并不一样。

