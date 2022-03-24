const Developer = ({ name, skills }) => {
  return (
    <div className="dev">
      <h2>{name}</h2>
      <ul>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  )
}

export default Developer
