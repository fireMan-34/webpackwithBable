function component() {
  const ele = document.createElement('div');
  ele.innerHTML = `'Running webpack', ${Array.from([ 'dev' ])}`;
  return ele;
}

document.body.appendChild(component());