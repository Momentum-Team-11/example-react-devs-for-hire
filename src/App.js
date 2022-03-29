import { useState } from 'react'
import Developer from './components/Developer'
import { developerData } from './developerData'

const App = () => {
  const developers = developerData
  const [selectedDev, setSelectedDev] = useState(null)

  return (
    <>
      <h1>Devs for Hire 👩‍💻</h1>
      {selectedDev ? (
        <Developer
          name={selectedDev.name}
          skills={selectedDev.skills}
          github={selectedDev.gitHubUsername}
        />
      ) : (
        developers.map((dev, idx) => {
          if (dev.availableForHire) {
            return (
              <div className="dev-card" onClick={() => setSelectedDev(dev)}>
                <Developer
                  name={dev.name}
                  skills={dev.skills}
                  key={idx}
                  github={dev.gitHubUsername}
                />
              </div>
            )
          }
        })
      )}
    </>
  )
}

export default App
