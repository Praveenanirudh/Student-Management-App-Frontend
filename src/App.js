import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import ListStudent from "./components/ListStudent";
import Navbar from "./components/Navbar";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/studentList" element={<ListStudent />}></Route>
          <Route path="/addStudent" element={<AddStudent />}></Route>
          <Route path="/editStudent/:id" element={<UpdateStudent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
