import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Trial() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("http://127.0.0.1:5000/members")
  //       .then((response) => setData(response.data))
  //       .catch((error) => setIsError(isError.message));
  //   }, []);
  useEffect(() => {
    axios
      .post("http://127.0.0.1:5000/login", {
        username: "Finn",
        password: "Williams",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  });

  //   console.log(data.members);
  //   const renderList = data.members.map((item) => <div>{item}</div>);
  //   return <div>{renderList}</div>;
}
