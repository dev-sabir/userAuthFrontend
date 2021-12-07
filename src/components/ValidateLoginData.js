import Axios from "axios";
export default function validateLoginData(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (Object.keys(errors).length === 0) {
    const userData = {
      email: values.email,
      password: values.password,
    };
    Axios.post("http://sabirauthbackend.herokuapp.com/api/login", userData)
      .then((response) => {
        if (response) {
          localStorage.setItem("token", response.data.accessToken);
        }
        console.log(response);
      })
      .catch((err) => {
        errors.email = "Invalid Email or Password";

        console.log(`Error-> ${err} `);
      });
    console.log(userData);
  }
  return errors;
}
