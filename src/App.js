import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListEmployee />}></Route>
          <Route path="/addEmployee" element={<AddEmployee/>}></Route>
          <Route path="/updateEmployee/:id" element={<AddEmployee/>}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
