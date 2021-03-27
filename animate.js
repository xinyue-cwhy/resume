//缓动动画
function moveload(obj, mixlenght, callback) {
  obj.timer = setInterval(() => {
    var step = (mixlenght - obj.offsetTop) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetTop == mixlenght) {
      clearInterval(obj.timer);
      // if (callback) { callback(); }
      callback && callback();
    }
    obj.style.top = (obj.offsetTop + step) + 'px';
  }, 15);
  console.log(mixlenght);
  // obj.style.top = mixlenght + 'px';
  // // }, 15);
}