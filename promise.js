class Promise {
  constructor(fn) {
    this.status = 'pending';
    this.reason = undefined;
    this.value = undefined;

    const resolve = (data)=>{
      if(this.status === 'pending') {
        this.status = 'resolved';
        this.value = data
      }
    };
    const reject = (data)=>{
      if(this.status === 'pending') {
        this.status = 'rejected'
        this.reason = data
      }
    };
    fn(resolve,reject);
  }
  then(onFullfilled,onRejeceted){
    if(this.status === 'resolved') {
      onFullfilled(this.value)
    }
    if(this.status === 'rejected') {
      onRejeceted(this.reason)
    }
  }
}

module.exports = Promise