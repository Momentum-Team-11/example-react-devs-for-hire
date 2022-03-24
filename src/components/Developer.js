import { useState } from 'react'

const Developer = ({ name, skills }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="dev">
      <h2>{name}</h2>
      {expanded ? (
        <div>
          <button onClick={() => setExpanded(false)}>Hide expertise</button>
          <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={() => setExpanded(true)}>Show expertise</button>
      )}
    </div>
  )
}

export default Developer
