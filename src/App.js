import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Profile from "./components/Profile.js";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
