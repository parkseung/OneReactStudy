/*
node.js : 자바스크립트 런타임

ctrl + j : 터미널 열기
터미널창에서 node sample.js 실행시, node.js에게 sample.js 실행하라고 명령

터미널창에 npm init : node.js 패키지를 구성하는데 필요한 최소한의 구성 요소를 자동으로 실행하는 과정
- 초기 프로젝트 이름만 세팅 진행하고, 이후에는 Enter..... 마지막에 yes 입력하여 패키지 설치

ESM : ES란, ECMAScript의 약자이며 자바스크립트의 표준, 규격을 나타내는 용어이다.
      import, export를 사용하기 위해서는 package.json에 type:module를 정의해줘야한다.

npm run start : package.json에 선언된 start를 실행하여 선언된 index.js를 수행한다.

npm i loadash : loadash 라이브러리 설치
-> 라이브러리를 설치하면 node_modules폴더가 생성이 되며, 이 폴더는 라이브러리가 실제로 설치되는 곳이다.
-> package.json에 dependencies 항목이 추가된다. : 이 패키지를 실행하기 위해 필요한 추가 라이브러리라는 뜻이다.
-> 정확한 버전확인은 package-lock.json에 나와있다.
*/
console.log("hello");
