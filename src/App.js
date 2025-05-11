import { Route, Routes } from "react-router-dom";
import User from "./User";
import Verifier from "./Verifier";
import Admin from "./Admin";
import "./App.css";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<User />} />
        <Route path="/verifier" element={<Verifier />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
