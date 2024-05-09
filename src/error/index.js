function createErrorHandler({ from }) {
  return function errorHandler (ev) {
    console.log(`由${from}捕捉到异常`);
    console.error(ev ? ev : '有异常，但参数无法读取' );
    if (console.trace) {
      console.trace();
    }
  }
}

window.addEventListener('error', createErrorHandler({ from: 'addEvent' }));

window.onerror = createErrorHandler({ from: 'onerror' });