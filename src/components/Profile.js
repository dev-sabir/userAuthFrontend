import "../styles/profile.css";
import Axios from "axios";
import { useState } from "react";
const Profile = () => {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  Axios.get("https://sabirauthbackend.herokuapp.com/userprofile", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    const { firstName, lastName, email, phone, address } = response.data;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPhone(phone);
    setAddress(address);
    console.log(response);
  });
  return (
    <div className="user-profile">
      <h1> Welcome to profile</h1>
      <h2>{`Your First Name:  ${fName}`} </h2>
      <h2>{`Your Last Name:  ${lName}`} </h2>
      <h2>{`Your Email is:  ${Email}`} </h2>
      <h2>{`Your Phone No:  ${Phone}`} </h2>
      <h2>{`Your Address:  ${Address}`} </h2>
    </div>
  );
};

export default Profile;
