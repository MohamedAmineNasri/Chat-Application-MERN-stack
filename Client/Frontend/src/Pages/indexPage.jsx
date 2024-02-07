import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const IndexPage = (props) => {
   const navigate = useNavigate();

   useEffect(() => {
     const token = localStorage.getItem("token");
     console.log(token)
     if (!token) {
       navigate("/login");
     } else {
       navigate("/dashboard");
     }
   }, [navigate]);
  return <div>indexPage</div>;
};
export default IndexPage;
