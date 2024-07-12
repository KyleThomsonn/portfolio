import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import AOS from "aos";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

function SingleProject({ project }) {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 100,
      duration: 800,
      once: true,
    });
  }, []);

  return (
  <HelmetProvider>
  <>
    <Helmet>
      <meta name="description" content={project.acf && project.acf.seo_meta_description} />
    </Helmet>
  
    <div className="single-project">
      <section data-aos="fade-up" className="project-card">
        <img
          className="mockups-img"
          src={project.acf.project_image.url}
          alt={project.acf.project_image.alt}
        />
        <h2 className="single-project-title">{project.acf.project_title}</h2>

        <ul className="software-list">
          {project.acf.software_used.map((software, index) => (
            <li key={index}>{software}</li>
          ))}
        </ul>
        <p className="project-description">{project.acf.project_description}</p>

        <div className="project-live-links">
          <Link to={project.acf.project_title !== "Portfolio" && project.acf.live_site} target={project.acf.project_title !== "Portfolio" ? "_blank" : "_self"}>
            Live Site <CiGlobe />
          </Link>
          <Link to={project.acf.github} target="_blank">
            GitHub <FaGithub />
          </Link>
        </div>
      </section>

      <section data-aos="fade-up" className="project-details">
        <Tabs>
          <TabList>
            {project.acf.process &&
            <Tab>Process</Tab>}
            <Tab>Highlights</Tab>
            <Tab>Reflection</Tab>
          </TabList>

          {project.acf.process &&
          <TabPanel>
            <p className="tab-p-text">{project.acf.process}</p>
            </TabPanel>}
          <TabPanel>
            <article>
              <h2>{project.acf.project_highlights[0].highlight_title}</h2>
              <p>{project.acf.project_highlights[0].highlight_description}</p>
              {project.acf.project_highlights[0].screenshot && (
                <img
                  className="highlights-img"
                  src={project.acf.project_highlights[0].screenshot.url}
                  alt={project.acf.project_highlights[0].screenshot.alt}
                ></img>
              )}
            </article>
            <article>
              <h2>{project.acf.project_highlights[1].highlight_title}</h2>
              <p>{project.acf.project_highlights[1].highlight_description}</p>
              {project.acf.project_highlights[1].screenshot && (
                <img
                  className="highlights-img"
                  src={project.acf.project_highlights[1].screenshot.url}
                  alt={project.acf.project_highlights[1].screenshot.alt}
                ></img>
              )}
            </article>
          </TabPanel>
          <TabPanel>
            <p className="tab-p-text">{project.acf.reflection}</p>
          </TabPanel>
        </Tabs>
      </section>
    </div>
    </>
    </HelmetProvider>
  );
}

export default SingleProject;
