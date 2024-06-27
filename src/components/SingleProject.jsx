import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";

function SingleProject( {project} ) {

  return (
        <section className="single-project">
            <article className='project-card'>
                <h2>{project.acf.project_title}</h2>
                <div className='projects-img-wrapper'>
                    {project.acf && <img src={project.acf.project_image.url} alt={project.acf.project_image.alt} />}
                </div>
                    <ul className="software-list">
                    {project.acf.software_used.map((software, index) => (
                        <li key={index}>{software}</li>
                    ))}
                    </ul>
                    <p className="project-description">{project.acf.project_description}</p>
                    
                    <div className='project-live-links'>
                        <Link to={project.acf.live_site} target="_blank">Live Site <CiGlobe /></Link>
                        <Link to={project.acf.github} target="_blank">GitHub <FaGithub /></Link>
                    </div>
            </article>

            <article className='project-details'>
            <Tabs>
                <TabList>
                <Tab>Highlights</Tab>
                <Tab>Reflection</Tab>
                </TabList>

                <TabPanel>
                <h2>Content</h2>
                </TabPanel>
                <TabPanel>
                <h2>Content</h2>
                </TabPanel>
            </Tabs>
            </article>
        </section>
      );
}

export default SingleProject