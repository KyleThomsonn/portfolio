import {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

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
              <p>{project.acf.project_description.slice(0, 150)}...</p>
              <ul>
                {project.acf.software_used.map((software, index) => (
                  <li key={index}>{software}</li>
                ))}
              </ul>
              <div className='projects-more-info'>
                <Link to={`/${project.slug}`}>{project.acf.more_info.title}</Link>
              </div>
            </div>
      </article>
    );
  }

export default Projects