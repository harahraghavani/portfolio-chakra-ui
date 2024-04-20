import "./App.css";
import CommonButton from "./components/common/CommonButton";

function App() {
  return (
    <div className="App">
      <h1>Harsh Raghavani</h1>
      <CommonButton
        rippleColor={"white"}
        duration={700}
        btnText={"Harsh"}
        bgColor={"linkedin"}
        variant={"solid"}
        textColor={"white"}
        hoverBgColor={"linkedin"}
      />
    </div>
  );
}

export default App;
