import { Add, add } from "./utils";
import IETestButton from "./components/IETestButton";

let isFinish = false;

// babel 运算优化，对于一些不涉及复炸调用的函数，babel 可以智能编译时运算结果

function component() {
  const ele = document.createElement('div');
  if (Math.random() > .5) {
    isFinish = true;
  } else {
    isFinish = isFinish ?? false;
  }
  ele.innerHTML = `'Running webpack', ${Array.from([ 'dev' ])}, ${isFinish ? 'finish' : 'none'} ${add(2,3)}${new Add(2,3).result}`;
  return ele;
}

document.body.appendChild(component());

console.log('mult entry points');

IETestButton({ name: 'array.from', fn: () => {
  alert(Array.from([2,3,4]))
}});

IETestButton({ name: 'history.replaceState', fn: () => {
  history.replaceState({}, '', '/');
}, autoClick: true})