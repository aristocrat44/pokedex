import React from "react";

const Home = () => {
  let getCharecters = async () => {
    let url = "https://dragon-ball-api.herokuapp.com/api/character";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*"
      }
    });
    console.log("response", response);
  };
  return (
    <div>
      <button
        onClick={() => {
          getCharecters();
        }}
      >
        Hello
      </button>
    </div>
  );
};

export default Home;
