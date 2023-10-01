import "./App.css";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import Even from "./component/Even";
import { useRef, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  const handleSetText = (e) => {
    setText(e.target.value);
  };

  const didMountRef = useRef(false); // 마운트 될때마다 초기화됨

  /*
  useEffect(() => {
    console.log("업데이트: ", text, count);
  }, [count, text]);
  */
  /*
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);

    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });
*/
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleSetText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
