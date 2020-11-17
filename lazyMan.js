var taskList = [];


// 订阅
function subscribe(name, arg) {
  var params = { name, arg };
  if (name === 'sleepFirst') {
    taskList.unshift(params)
  } else {
    taskList.push(params)
  }
}

// 发布
function publish() {
  if (taskList.length > 0) {
    run(taskList.shift())
  }
}

function run({ name, arg }) {
  switch (name) {
    case 'lazyMan': lazyMan(arg); break;
    case 'sleep': sleep(arg); break;
    case 'eat': eat(arg); break;
    case 'sleepFirst': sleepFirst(arg); break;
  }
}
function lazyMan(str) {
  console.log(`Hi! This is ${str}!`)
  publish()
}
function sleep(time) {
  setTimeout(() => {
    console.log(`Wake up after ${time}!`)
    publish()
  }, time * 1000)
}

function eat(str) {
  console.log(`Eat ${str}!`)
  publish()
}
function sleepFirst(time) {
  setTimeout(() => {
    console.log(`Wake up after ${time}!`)
    publish()
  }, time * 1000)
}

function lazyManFn() { }
lazyManFn.prototype.sleep = function (str) {
  subscribe('sleep', str)
  return this
}
lazyManFn.prototype.eat = function (time) {
  subscribe('eat', time)
  return this
}
lazyManFn.prototype.sleepFirst = function (time) {
  subscribe('sleepFirst', time)
  return this
}

function LazyMan(str) {
  subscribe('lazyMan', str)
  setTimeout(() => {
    publish()
  })
  return new lazyManFn()
}





LazyMan("Hank").sleepFirst(5).eat("supper")



