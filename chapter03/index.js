// import { PI, getArea, getCircumference } from "./circle.js";
// import * as circle from "./circle.js";
import circle from "./circle.js";
import lodash from "lodash";

// console.log(PI, getArea(1), getCircumference(1));

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr);
console.log(uniqueArr);
