import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline text-red-300">
    Hello world!
  </h1>


  <div className="avatar">
  <div className="w-24 rounded">
    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
  </div>
</div>

<div className="avatar-group -space-x-6">
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
    </div>
  </div>
  <div className="avatar">
    <div className="w-12">
      <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
    </div>
  </div>
</div>
        
    </>
  )
}

export default App
