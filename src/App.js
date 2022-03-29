import axios from 'axios'
import { useEffect, useState } from 'react'
import Developer from './components/Developer'
import { developerData } from './developerData'

const App = () => {
  const [selectedDev, setSelectedDev] = useState(null)

  return (
    <>
      <h1>Devs for Hire 👩‍💻</h1>
      // show a list of devs
      {selectedDev ? (
        <Developer
          name={selectedDev.name}
          skills={selectedDev.skills}
          github={selectedDev.gitHubUsername}
        />
      ) : (
        developerData.map((dev, idx) => {
          if (dev.availableForHire) {
            return (
              <Developer
                name={dev.name}
                skills={dev.skills}
                key={idx}
                github={dev.gitHubUsername}
              />
            )
          }
        })
      )}
    </>
  )
}

export default App
