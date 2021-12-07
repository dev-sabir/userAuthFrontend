import useLogin from "./useLogin";
import validate from "./ValidateLoginData.js";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useLogin(
    submitForm,
    validate
  );

  return (
    <div className="lform-content">
      <form className="form" onSubmit={handleSubmit}>
        <h1> Login </h1>
        <div className="lform-inputs">
          <label htmlFor="email" className="lform-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="lform-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email} </p>}
        </div>
        <div className="lform-inputs">
          <label htmlFor="password" className="lform-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="lform-input"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password} </p>}
        </div>
        <button className="lform-input-btn" type="submit">
          Login
        </button>
        <span className="lform-input-login">
          Doesn't have an account? Register <Link to="/">Click Here </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
