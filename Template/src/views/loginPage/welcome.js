import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import  Button  from "components/CustomButtons/Button.js"; 

const delay = ms => new Promise(res => setTimeout(res, ms));
const Dash = ({ setAuth = function(){} }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
    await delay(2500);
   console.log("2.5 seconds later...");
    document.location.reload(true);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h2>Welcome {name}</h2>
      <Button onClick={e => logout(e)} color="warning" className="btn btn-primary">
        Logout
      </Button>
    </div>
  );
};

export default Dash;
