import { useState } from "react";
import Registration from "./Registration";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import "../styles/registration.css";
const Form = () => {
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
      <div className="form-container">
        {!isSubmitted ? <Registration submitForm={submitForm} /> : <Profile />}
      </div>
    </>
  );
};

export default Form;
