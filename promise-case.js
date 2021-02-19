let Promise = require('./promise')

const p = new Promise((resolve,reject)=>{
  reject('123')
})
p.then(res=>{
  console.log('res');
  console.log(res);
},err=>{
  console.log('err');
  console.log(err);
})