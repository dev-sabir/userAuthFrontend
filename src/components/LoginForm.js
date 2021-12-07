import { useState } from "react";
import Profile from "./Profile";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
const LoginForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  function submitForm() {
    setIsSubmitted(true);
  }
  if (isSubmitted) {
    navigate("/profile");
  }
  return (
    <>
      <div className="lform-container">
        {!isSubmitted ? <Login submitForm={submitForm} /> : <Profile />}
      </div>
    </>
  );
};

export default LoginForm;
