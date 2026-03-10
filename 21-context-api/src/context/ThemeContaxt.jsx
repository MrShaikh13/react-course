import { createContext } from 'react'
export const ThemeDataContext = createContext()

const ThemeContaxt = (props) => {
  return (
    <div>
      <ThemeDataContext.Provider value='Musharraf'>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContaxt
