// const content = require('./assets/index.css');
// console.log(content);
const img = require('./assets/test.png')
console.log(img);
const imgDOM = document.createElement('img');
imgDOM.src = img;
document.body.appendChild(imgDOM);