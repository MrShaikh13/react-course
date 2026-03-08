import React from "react";

const Card = (props) => {
  console.log(props.user);
  console.log(props.age);
  return (
    <div className="card">
      <img src={props.img} alt="img" />
      <h1>Name: {props.user}</h1>
      <h1>Age: {props.age}</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      <button>view profile</button>
    </div>
  );
};

export default Card;
