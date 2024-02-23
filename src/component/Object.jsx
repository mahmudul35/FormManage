import React, { useState } from "react";

const Object = () => {
  let [myObj, setObj] = useState({
    color: "blue",
    game: "cricket",
  });
  let handler = () => {
    setObj((prevObj) => {
      return { ...prevObj, color: "red" };
    });
    console.log(myObj);
  };

  return (
    <div>
      <h1>My favourite game {myObj.color}</h1>
      <button onClick={handler}>Change Object</button>
    </div>
  );
};

export default Object;
