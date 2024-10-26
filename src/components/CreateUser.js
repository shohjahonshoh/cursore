import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToEdit = location.state?.user;
    if (userToEdit) {
      setUserId(userToEdit.id);
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setPhone(userToEdit.phone);
    }
  }, [location.state]);

  const saveToLocalStorage = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      id: userId || Date.now(),
      name,
      email,
      phone,
    };

    if (name && email && phone) {
      try {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        if (userId) {
          users = users.map((user) =>
            user.id === userId ? updatedUser : user
          );
        } else {
          users.push(updatedUser);
        }

        saveToLocalStorage(users);
        navigate("/show-user");
      } catch (error) {
        console.error("Error submitting user:", error);
      }
    }
  };

  return (
    <div>
      <h2>{userId ? "Edit User" : "Submit User"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/[^0-9+]/g, ""))}
        />
        <button type="submit">{userId ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
}

export default CreateUser;
