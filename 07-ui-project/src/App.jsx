import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

// import { useState } from 'react'
const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda aperiam voluptatum ex',
      tag: 'Satisfied',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661633077696-0e1c15a58c31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates assumenda aperiam voluptatum ex',
      tag: 'Underserved',
    },
    {
      img: 'https://images.unsplash.com/photo-1713526720041-9d11efeb5165?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates',
      tag: 'Underbanked',
    },
    {
      img: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sint veritatis dolorem, nemo odio error nihil ipsam ad quibusdam, qui nostrum similique reiciendis impedit amet provident. Vel consectetur labore architecto?',
      tag: 'underwere'
    }


  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App
