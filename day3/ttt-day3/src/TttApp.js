import TttjsxExpression from "./components/TttJsxExpression";
import TttFunComp from "./components/TttFuncComp";
import TttClassComp from "./components/TttClassComp";
function TttApp() {
  return (
    <div className="container border mt-3 bg-white">
        <h1>React JS  lesson 3 - Trần Thanh Tùng</h1>

        <TttjsxExpression />
        <hr/>
        {/*sử dụng function component*/}
        <TttFunComp/>
        {/*sử dụng class components */}
        <TttClassComp></TttClassComp>
    </div>
  );
}

export default TttApp;