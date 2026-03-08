import React from 'react'
import { useState } from "react";


const App = () => {

    const [num, setNum] = useState(10);

  const inBtnClick = () => {
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
  };
  const decBtnClick = () => {
    setNum(prev =>(prev-1))
    setNum(prev =>(prev-1))
    setNum(prev =>(prev-1))
  };
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={inBtnClick}>click me for increase</button>
      <button onClick={decBtnClick}>click me for decrease</button>
    </div>
  )
}

export default App







// const App = () => {
//   const [num, setNum] = useState(10);

//   const btnClick = () => {
//     setNum(prev =>(prev+1))
//     setNum(prev =>(prev+1))
//     setNum(prev =>(prev+1))
//   };

//   return (
//     <div>
//       <h1>
//         {num}
//       </h1>
//       <button onClick={btnClick}>click</button>
//     </div>
//   );
// };

// export default App
