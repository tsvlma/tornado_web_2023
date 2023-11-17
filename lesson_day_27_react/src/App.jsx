import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="profile-card" bg-white w-80 p-5 text-center rounded-xl>
        <img src="profile-picture.jpg" alt="Your Name" className="profile-img rounded-full w-32 h-36" />
        <h1>name</h1>
        <p>Profession or Tagline</p>
        <div className="profile-info">
            <p><strong>About me;</strong> Brief description or bio goes here</p>
            <p><strong>Skills;</strong> Skill 1, Skill 2, Skill3</p>
            <p><strong>Contact</strong><a href="mailto:your.email@example.com">your.email@example.com</a></p>
        </div>
    </div>
  )
}

export default App
