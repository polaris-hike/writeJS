function EventEmitter() {
  this._events = {};
}

EventEmitter.prototype.on = function (eventName, callback) {
  if (!this._events) {
    this._events = {};
  }
  if (this._events[eventName]) {
    this._events[eventName].push(callback);
  } else {
    this._events[eventName] = [callback];
  }
};

EventEmitter.prototype.emit = function (eventName, ...args) {
  if (this._events[eventName]) {
    this._events[eventName].forEach(fn => fn(...args));
  }
};

EventEmitter.prototype.once = function (eventName, fn) {
  const one = () => {
    fn()
    this.off(eventName)
  };
  one.l = fn;
  this.on(eventName,one)
};

EventEmitter.prototype.off = function (eventName,callback) {
  if (this._events[eventName]) {
    this._events[eventName] = this._events[eventName].filter(fn=>fn !== callback && fn.l !== callback)
  }
};


const girl = new EventEmitter();

const fn =  () => {
  console.log('yy');
}
girl.once('sex',fn);
girl.off('sex',fn);
girl.emit('sex');
