import React from 'react'

const Navbar = (props) => {
    console.log(props)
    function changTheme(){
        console.log( props.theme)
        props.setTheme("dark")
    }
  return (
    <div>
      <button onClick={changTheme} >Change Theme</button>
    </div>
  )
}

export default Navbar
