import Developer from './components/Developer'
import { developerData } from './developerData'

const App = () => {
  const developers = developerData
  return (
    <>
      <h1>Devs for Hire 👩‍💻</h1>
      {developers.map((dev, idx) => {
        if (dev.availableForHire) {
          return <Developer name={dev.name} skills={dev.skills} key={idx} />
        }
      })}
    </>
  )
}

export default App
