import "./Body.css";
import { useRef, useState } from "react";
//import React from "react";

/*
function Body(props) {
  const { name, location } = props;
  console.log(name, location);
  return (
    <div className="body">
      {name}은 {location}에 거주합니다.
    </div>
  );
}
*/

/*
function Body({ name, location, favorList }) {
  console.log(name, location, favorList);
  return (
    <div className="body">
      {name}은 {location}에 거주합니다.
      <br />
      {favorList.length}개의 음식을 좋아합니다.
    </div>
  );
}

Body.defaultProps = {
  favorList: [],
};
///////////////////////////////////////////////////////////////////////////////
function Body({ children }) {
  console.log(children);
  return <div className="body">{children}</div>;
}

*/
/*
// useState 실습
function Body() {
  console.log("Update!");
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
*/
/*
// input 실습
function Body() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={handleOnChange} />
      <div>{text}</div>
    </div>
  );
}
*/

/*
// date 타입 실습
function Body() {
  const [date, setDate] = useState("");

  const handleOnChange = (e) => {
    console.log("변경된 값: " + e.target.value);
    setDate(e.target.value);
  };

  return (
    <div>
      <input type="date" value={date} onChange={handleOnChange} />
      <div>{date}</div>
    </div>
  );
}
*/
/*
// Dropbox 실습
function Body() {
  const [option, setOption] = useState("");

  const handleOnChange = (e) => {
    console.log("변경된 값: " + e.target.value);
    setOption(e.target.value);
  };

  return (
    <div>
      <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select>
    </div>
  );
}
*/
/*
// textArea 실습
function Body() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    console.log("변경된 값: " + e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleOnChange} />
    </div>
  );
}
*/
/*
// 객체 State 실습
function Body() {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    console.log("현재 수정 대상: " + e.target.name);
    console.log("수정값: " + e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name"
          value={state.name}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={state.birth}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}
*/
/*
// 자식요소에 props로 state값 전달 실습
function Viewer({ number }) {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Body() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />

      <button onClick={onDecrease}>-</button>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
*/

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}

export default Body;
