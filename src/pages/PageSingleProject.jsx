import { useParams } from 'react-router-dom';
import { restBase } from '../utilities/Utilities';
import { useEffect, useState } from 'react';

function PageSingleProject() {

  const { slug } = useParams();

  const restPathPosts = restBase + `projects?slug=${slug}`;

  const [restDataPosts, setDataPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response_posts = await fetch(restPathPosts);

        if (!response_posts.ok && !response_page.ok) {
          throw new Error('Failed to fetch data');
        }

        const restDataPosts = await response_posts.json();

        setDataPosts(restDataPosts);

        setTimeout(() => {
          setLoading(false);
        }, 1000);

      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData()
    }, [restDataPosts, slug]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>PageSingleProject</div>
  )
}

export default PageSingleProject