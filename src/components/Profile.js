import "../styles/profile.css";
import Axios from "axios";
import { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log(lName);
  }, [fName, lName, Email, Phone, Address]);

  return (
    <div className="user-profile">
      <h1> Welcome to profile</h1>
      <h2>{`Your First Name:  ${fName ? fName : "loading..."}`} </h2>
      <h2>{`Your Last Name:  ${lName ? lName : "loading..."}`} </h2>
      <h2>{`Your Email is:  ${Email ? Email : "loading..."}`} </h2>
      <h2>{`Your Phone No:  ${Phone ? Phone : "loading..."}`} </h2>
      <h2>{`Your Address:  ${Address ? Address : "loading..."}`} </h2>
    </div>
  );
};

export default Profile;
