import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContaxt";

const Button = () => {
  const [theme,setTheme] = useContext(ThemeDataContext);

  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button className="btn" onClick={changeTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default Button;
