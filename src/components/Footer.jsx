import { getYear } from '../utilities/Utilities';
import { author } from '../global/global';
import { SocialIcon } from 'react-social-icons';


function Footer() {
  return (
    <footer>
      <p>&copy; {getYear()} {author}</p>
      <div className='social-icons'>
        <SocialIcon url="https://github.com/KyleThomsonn" bgColor="#554EEF" style={{width: '2rem', height: '2rem'}}/>
        <SocialIcon url="https://www.linkedin.com/in/kyle-thomson-a067002a3/" bgColor="#554EEF" style={{width: '2rem', height: '2rem'}}/>
        <SocialIcon url="mailto:kylethomsonn@gmail.com" bgColor="#554EEF" style={{width: '2rem', height: '2rem'}}/>
      </div>
    </footer>
  )
}

export default Footer