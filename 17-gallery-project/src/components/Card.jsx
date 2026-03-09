import React from "react";

const Card = (props) => {
  return (
    <div className="h-full w-full">
      <a href={props.val.url} target="_blank">
        <img
          className="h-[85%] w-full object-cover"
          src={props.val.download_url}
          alt="img"
        />
        <p className="absolute bottom-0 left-2 font-semibold text-s">
          {props.val.author}
        </p>
      </a>
    </div>
  );
};

export default Card;
