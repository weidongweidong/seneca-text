const seneca = require('seneca')();


function minimal_plugin(options) {
  console.log(11111111)
}

seneca.use(minimal_plugin,{aa:11})

//声明一个 服务 就是生产者，  
seneca.add({role:"math", cmd :"product" }, (msg, replay)=>{
  return replay(null, {answer  :  msg.left * msg.right});
})

seneca.act({role:"math" , cmd :"product", left:2, right:4} , (err, result )=>{
    if(err){
      console.log("出现错误", err);
    }
    console.log(result);
  })