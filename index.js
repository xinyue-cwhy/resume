// 轮播图
var focus = document.querySelector('.focus');
// var right_btn = document.querySelector('.right_btn');
// var left_btn = document.querySelector('.left_btn');

// //解决左右按钮显隐问题
// focus.addEventListener('mouseenter', function () {
//   right_btn.style.display = 'block';
//   left_btn.style.display = 'block';
//   //清除定时器
//   clearInterval(timer);
// })
// focus.addEventListener('mouseleave', function () {
//   right_btn.style.display = 'none';
//   left_btn.style.display = 'none';
//   //开启定时器
//   timer = setInterval(() => {
//     right_btn.click();//手动调用点击事件
//   }, 2000);
// })
var circle = document.querySelector('.circle')
var focus_ol = circle.querySelector('ol')
var focus_ul = focus.querySelector('ul')
//根据图片生成小圆圈
for (let i = 0; i < focus_ul.children.length; i++) {
  let li = document.createElement('li');
  focus_ol.appendChild(li);
  focus_ol.children[i].setAttribute('data_index', i);
}
// //克隆图片 便于无缝连接
// var img_first = focus_ul.children[0].cloneNode(true);
// focus_ul.appendChild(img_first);
//圆圈底色及图跟着圆圈走
for (let i = 0; i < focus_ol.children.length; i++) {
  focus_ol.children[0].className = 'check';
  focus_ol.children[i].addEventListener('click', () => {
    //干掉其他人
    for (let i = 0; i < focus_ol.children.length; i++) {
      focus_ol.children[i].className = '';
    }
    //留下我自己
    focus_ol.children[i].className = 'check';
    //图跟着圆圈走
    var img_height = focus_ul.children[i].offsetHeight;
    console.log(img_height);
    moveload(focus_ul, -(i * img_height));
    // var index = focus_ol.children[i].getAttribute('data_index');
    //圈圈跟着左右按钮走
    // num = index;
  })
}
//有变量提升不怕
//按钮控制图片
// var num = 0;
// var flag = true;//节流阀
// right_btn.addEventListener('click', () => {
//   if (flag) {
//     flag = false;
//     if (num >= focus_ul.children.length - 1) {
//       num = 0;
//       focus_ul.style.left = '0px';
//     }
//     num++;
//     move(focus_ul, -(num * img_width), () => { flag = true });
//     paita();
//   }
// })
// left_btn.addEventListener('click', () => {
//   if (flag) {
//     flag = false;
//     if (num == 0) {
//       num = focus_ul.children.length - 1;
//       focus_ul.style.left = (-num * img_width) + 'px';
//     }
//     num--;
//     move(focus_ul, -num * img_width, () => { flag = true });
//     paita();
//   }
// })
//提取公共函数
// function paita() {
//   for (let i = 0; i < focus_ol.children.length; i++) {
//     focus_ol.children[i].className = '';
//   }
//   //留下我自己
//   if (num == focus_ul.children.length - 1) {
//     focus_ol.children[0].className = 'check';
//   }
//   else {
//     focus_ol.children[num].className = 'check';
//   }
// }
// //自动轮播
// var timer = setInterval(() => {
//   right_btn.click();//手动调用点击事件
// }, 2000);
