import Developer from './components/Developer'
import { developerNames } from './developerData'

const App = () => {
  const developers = developerNames
  return (
    <>
      <h1>Devs for Hire 👩‍💻</h1>
      {developers.map((dev, idx) => {
        return <Developer name={dev} skills="react" key={idx} />
      })}
    </>
  )
}

export default App
