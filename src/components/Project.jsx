import {useState, useEffect} from 'react'

function Project({ project }) {
    const [image, setImage] = useState('');
  
    useEffect(() => {
      const fetchAttachment = async () => {
        if (project._links && project._links['wp:attachment']) {
          const attachmentURL = project._links['wp:attachment'][0].href;
          try {
            const response = await fetch(attachmentURL);
            if (!response.ok) {
              throw new Error('Failed to fetch attachment data');
            }
            const data = await response.json();
            setImage(data[0]);
          } catch (error) {
            console.error('Error fetching attachment data:', error);
          }
        }
      };
  
      fetchAttachment();
    }, [project]);
  
    return (
      <div>
        <h2>{project.acf.project_title}</h2>
        <p>{project.acf.project_description}</p>
        {image && <img src={image.source_url} alt={image.alt_text} />}
      </div>
    );
  }

export default Project