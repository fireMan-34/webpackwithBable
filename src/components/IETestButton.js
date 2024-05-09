

export default function IETestButton ({ name, fn, autoClick  }) {
  const button = document.createElement('button');
  button.innerText = 'IE 测试函数:' + name;
  button.style.display = 'block';
  button.style.margin = '16px';
  button.onclick = function(ev) {
    return fn(ev);
  };
  if (autoClick) {
    button.click();
  }
  document.body.appendChild(button);
}