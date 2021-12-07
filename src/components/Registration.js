import useForm from "./useForm";
import validate from "./ValidateData.js";
import { Link } from "react-router-dom";
import "../styles/registration.css";

const Registration = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content">
      <form className="form" onSubmit={handleSubmit}>
        <h1> Registration </h1>
        <div className="form-inputs">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            id="firstname"
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your firstname"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your lastname"
            value={values.lastname}
            onChange={handleChange}
          />
          {errors.lastname && <p>{errors.lastname} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Phone No.
          </label>
          <input
            id="phone"
            type="text"
            name="phone"
            className="form-input"
            placeholder="Enter your Phone No. "
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            id="address"
            type="text"
            name="address"
            className="form-input"
            placeholder="Enter your address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && <p>{errors.address} </p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your Password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password} </p>}
        </div>
        <button className="form-input-btn" type="submit">
          Register
        </button>
        <span className="form-input-login">
          Already have an account? Login <Link to="/login">Click Here </Link>
        </span>
      </form>
    </div>
  );
};

export default Registration;
