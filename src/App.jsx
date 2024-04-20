import { Outlet } from "react-router-dom";
import Foot from "./Components/Footer";
import Nav from "./Components/Head";

function App() {
  return (
    <>
      <Nav></Nav>
      {/* <Home></Home> */}
      <Outlet></Outlet>
      <Foot></Foot>
    </>
  );
}

export default App;
