import Developer from './components/Developer'

//  create my App component -- I need react for this
// function App() {
//   return <h1>Devs for Hire 👩‍💻</h1>
// }

const App = () => {
  const developers = ['Kalen', 'K.E.', 'Brittany', 'Adam', 'Paul']
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
