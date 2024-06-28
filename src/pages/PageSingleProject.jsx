import { useParams } from "react-router-dom";
import { restBase } from "../utilities/Utilities";
import { useEffect, useState } from "react";
import SingleProject from "../components/SingleProject";

function PageSingleProject() {
  const { slug } = useParams();

  const restPathPosts = restBase + `projects?slug=${slug}&acf_format=standard`;

  const [Projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_posts = await fetch(restPathPosts);

        if (!response_posts.ok && !response_page.ok) {
          throw new Error("Failed to fetch data");
        }

        const Projects = await response_posts.json();

        setProjects(Projects);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [Projects, slug]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return <main>{Projects[0] && <SingleProject project={Projects[0]} />}</main>;
}

export default PageSingleProject;
