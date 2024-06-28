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
            <h2>Content</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate velit non dolores natus odio unde dolorem quos enim,
              obcaecati provident similique quibusdam, sit consequuntur! Rerum,
              odio accusantium? Distinctio ducimus sunt, cupiditate in rem
              corrupti ratione harum excepturi non consequuntur at aliquid iste
              ipsam nisi, necessitatibus facilis dolorem odit praesentium sint.
            </p>
          </TabPanel>
          <TabPanel>
            <h2>Content</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi qui
              laudantium quos aspernatur harum ullam dolorem repellendus
              dignissimos laboriosam perferendis ipsa dolor consequuntur, eos
              quibusdam earum magni nisi asperiores, blanditiis numquam.
              Consequuntur provident ipsam numquam a, dolorem esse voluptate
              reiciendis officiis, laudantium ex vitae vero quaerat vel, commodi
              totam rem amet quasi nemo recusandae adipisci distinctio optio id
              perspiciatis quos? Id incidunt, explicabo libero asperiores atque
              culpa officiis. Reiciendis natus non praesentium iste illo?
              Provident!
            </p>
          </TabPanel>
        </Tabs>
      </article>
    </section>
  );
}

export default SingleProject;
