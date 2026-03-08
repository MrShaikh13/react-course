import React from "react";

const App = () => {
  const inputChanging = (value) => {
    console.log(value);
  };
  return (
    <div onWheel={(el)=>{
      console.log(el.deltaY)
    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
    </div>
  );
};

export default App;
