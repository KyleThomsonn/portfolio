import { useParams } from "react-router-dom";
import { restBase } from "../utilities/Utilities";
import { useEffect, useState } from "react";
import SingleProject from "../components/SingleProject";
import { appTitle } from "../global/global";
import { scrollToTop } from "../utilities/Utilities";
import { Link } from "react-router-dom"; 

function PageSingleProject() {
  const { slug } = useParams();

  const restPathPosts = restBase + `projects?slug=${slug}&acf_format=standard`;

  const [Projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_posts = await fetch(restPathPosts);

        if (!response_posts.ok && !response_page.ok) {
          throw new Error("Failed to fetch data");
        }

        const Projects = await response_posts.json();

        setProjects(Projects);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [Projects, slug]);

  useEffect(() => {
    if (Projects.length > 0) {
      document.title = `${appTitle} | ${Projects[0].title.rendered}`;
    }
  }, [Projects]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <main id="#main">
      {Projects[0] && <SingleProject project={Projects[0]} />} 
      <div className="all-projects-btn">
        <Link onClick={scrollToTop} to="/projects">See All Works</Link>
      </div>
    </main>);
}

export default PageSingleProject;
