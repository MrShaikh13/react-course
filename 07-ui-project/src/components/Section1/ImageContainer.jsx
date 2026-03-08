import React from "react";
import RightCard from "./RightCard";

const ImageContainer = (props) => {
  return (
    <div id="rightContent" className="h-full py-5 w-4/5 flex overflow-x-auto flex-nowrap gap-5 ">
      {props.users.map((e, idx)=>{
        return <RightCard img={e.img} tag={e.tag} intro={e.intro} key={idx} id={idx}/>
      })}
    </div>
  );
};

export default ImageContainer;
