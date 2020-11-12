var taskList = []

// 订阅
function subscribe(name, arg) {
  const params = {
    name, arg
  }
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
    case 'eat': eat(arg); break;
    case 'sleep': sleep(arg); break;
    case 'sleepFirst': sleepFirst(arg); break;
  }
}




// 输出文字
function lazyManLog(str) {
  console.log(str);
}

// 具体方法
function lazyMan(str) {
  lazyManLog("Hi!This is " + str + "!");
  publish()
}
function eat(str) {
  lazyManLog("Eat" + str + "~");
  publish()
}
function sleep(time) {
  setTimeout(() => {
    lazyManLog("Wake up after " + time + "!");
    publish()
  }, time * 1000)

}
function sleepFirst(str) {
  setTimeout(() => {
    lazyManLog("Wake up after " + time + "!");
    publish()
  }, time * 1000)

}
LazyMan = function (str) {
  subscribe('lazyMan', 'wuxuwei')
  setTimeout(() => {
    publish()
  })
  return LazyMan.prototype
}
// 类
function lazyManFn() { }
LazyMan.prototype.eat = function (str) {
  subscribe('eat', str)
  return this
}
LazyMan.prototype.sleep = function (time) {
  subscribe('sleep', time)
  return this
}
LazyMan.prototype.sleepFirst = function (time) {
  subscribe('sleepFirst ', time)
  return this
}

LazyMan('xxx').sleep(3).eat('dinner')









