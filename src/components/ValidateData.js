import Axios from "axios";
export default function validateData(values) {
  let errors = {};

  if (!values.firstname.trim()) {
    errors.firstname = "Firstname required";
  }
  if (!values.lastname.trim()) {
    errors.lastname = "Lastname required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.phone.trim()) {
    errors.phone = "Phone No. required";
  }
  if (!values.address.trim()) {
    errors.address = "Address required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (Object.keys(errors).length === 0) {
    const userData = {
      firstName: values.firstname.trim(),
      lastName: values.lastname.trim(),
      email: values.email,
      phone: values.phone.trim(),
      address: values.address.trim(),
      password: values.password,
    };
    Axios.post(
      "http://sabirauthbackend.herokuapp.com/api/signup",
      userData
    ).then((response) => {
      if (response) {
        localStorage.setItem("token", response.data.accessToken);
      }
    });
  }
  return errors;
}
