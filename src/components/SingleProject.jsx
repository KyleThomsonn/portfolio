import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import AOS from "aos";
import { useEffect } from "react";

function SingleProject({ project }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 800,
    });
  }, []);

  return (
    <section className="single-project">
      <article data-aos="fade-up" className="project-card">
        <img
          className="mockups-img"
          src={project.acf.project_image.url}
          alt={project.acf.project_image.alt}
        />
        <h2>{project.acf.project_title}</h2>

        <ul className="software-list">
          {project.acf.software_used.map((software, index) => (
            <li key={index}>{software}</li>
          ))}
        </ul>
        <p className="project-description">{project.acf.project_description}</p>

        <div className="project-live-links">
          <Link to={project.acf.live_site} target="_blank">
            Live Site <CiGlobe />
          </Link>
          <Link to={project.acf.github} target="_blank">
            GitHub <FaGithub />
          </Link>
        </div>
      </article>

      <article data-aos="fade-up" className="project-details">
        <Tabs>
          <TabList>
            <Tab>Highlights</Tab>
            <Tab>Reflection</Tab>
          </TabList>

          <TabPanel>
            <h2>{project.acf.project_highlights[0].highlight_title}</h2>
            <p>
              {project.acf.project_highlights[0].highlight_description}
            </p>
            <h2>{project.acf.project_highlights[1].highlight_title}</h2>
            <p>
            {project.acf.project_highlights[1].highlight_description}
            </p>
          </TabPanel>
          <TabPanel>
            <h2>{project.acf.project_highlights[1].highlight_title}</h2>
            <p>
            {project.acf.project_highlights[1].highlight_description}
            </p>
          </TabPanel>
        </Tabs>
      </article>
    </section>
  );
}

export default SingleProject;
