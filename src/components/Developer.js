import { useEffect, useState } from 'react'
import axios from 'axios'

const Developer = ({ name, skills, github }) => {
  const [expanded, setExpanded] = useState(false)
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/users/${github}/repos?per_page=3&sort=created`
      )
      .then((response) => setRepos(response.data))
  }, [github])

  return (
    <div className="dev">
      <h2>{name}</h2>
      {expanded ? (
        <div>
          <button onClick={() => setExpanded(false)}>Hide expertise</button>
          <h3 className="title">Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h3 className="title">Most recent repos</h3>
          {repos.map((repo) => (
            <div className="repo-container" key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
            </div>
          ))}
        </div>
      ) : (
        <button onClick={() => setExpanded(true)}>Show expertise</button>
      )}
    </div>
  )
}

export default Developer
