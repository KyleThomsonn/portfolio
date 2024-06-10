import {useState, useEffect} from 'react'

function Projects({ project }) {
  
    return (
      <article className='project-card'>
          {project.acf && <img src={project.acf.project_image.url} alt={project.acf.project_image.alt} />}
          <h2>{project.acf.project_title}</h2>
            <p>{project.acf.project_description}</p>
            <ul>
              {project.acf.software_used.map((software, index) => (
                <li key={index}>{software}</li>
              ))}
            </ul>
            <a href={project.acf.more_info.url}>{project.acf.more_info.title}</a>
      </article>
    );
  }

export default Projects