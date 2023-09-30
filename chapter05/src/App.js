import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

/*
function App() {
  const BodyProps = {
    name: "테스트",
    location: "부천시",
    //favorList: ["파스타", "빵", "떡볶이"],
  };

  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Footer />
    </div>
  );
}
*/

function ChildComp() {
  return <div>child component</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
