import { Routes, Route } from "react-router-dom";
import Login from "./Login";

function R() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default R;
