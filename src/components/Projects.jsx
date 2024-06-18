import {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects({ project }) {

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 800, 
    });
  }, [])
  
    return (
      <article data-aos="fade-up" className='project-card'>
        <div className='projects-img-wrapper'>
          {project.acf && <img src={project.acf.project_image.url} alt={project.acf.project_image.alt} />}
        </div>
          <div className='projects-info-wrapper'>
            <h2>{project.acf.project_title}</h2>
              <p>{project.acf.project_description}</p>
              <ul>
                {project.acf.software_used.map((software, index) => (
                  <li key={index}>{software}</li>
                ))}
              </ul>
              <div className='projects-more-info'>
                <a href={project.acf.more_info.url}>{project.acf.more_info.title}</a>
              </div>
            </div>
      </article>
    );
  }

export default Projects