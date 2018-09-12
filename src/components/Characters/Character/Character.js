import React from "react";

const Character = props => {
  console.log(props);
  return (
    <div
      style={{ border: "1px solid black", margin: "5px" }}
      onClick={() => props.deleteName(props.id)}
    >
      <p>{props.obj.name}</p>
    </div>
  );
};

export default Character;
