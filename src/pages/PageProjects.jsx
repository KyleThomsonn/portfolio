import { useState, useEffect } from 'react'
import { restBase } from '../utilities/Utilities'
import Projects from '../components/Projects';

function PageProjects() {
  const restPathPosts = restBase + 'projects?acf_format=standard';
  const restPathPage = restBase + 'pages/86';

  const [restDataPosts, setDataPosts] = useState([]);
  const [restDataPage, setDataPage] = useState([])
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_posts = await fetch(restPathPosts);
        const response_page = await fetch(restPathPage)
        if (!response_posts.ok && !response_page.ok) {
          throw new Error('Failed to fetch data');
        }
        const restDataPosts = await response_posts.json();
        const restDataPage = await response_page.json()
        setDataPosts(restDataPosts);
        setDataPage(restDataPage)
      } catch (error) {
        setError(error);
      }
    }
    fetchData()
    }, [restPathPosts, restPathPage]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>{ restDataPage.acf && restDataPage.acf.page_title}</h1>
    {restDataPosts.map((project, id) => (
      <Projects key={id} project={project} />
    ))}
  </>
);

}

export default PageProjects