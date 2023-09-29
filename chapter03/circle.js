/*
export를 사용하면 다른 파일(모듈)에서 불러와(import) 사용할 수 있다.
*/

const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

// export { PI, getArea, getCircumference };
export default {
  PI,
  getArea,
  getCircumference,
};
