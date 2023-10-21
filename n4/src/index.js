import {Cartesian3} from 'cesium';
const Img = require('./asserts/test1.png')
console.log(Cartesian3.ZERO);

const img = document.createElement('img');
img.src = Img;
document.body.appendChild(img)