import { NavLink } from 'react-router-dom'

function Nav( {handleShowHideNav} ) {

  const closeNav = () => {
    handleShowHideNav();
  }

  return (
    <nav className='nav' onClick={closeNav}>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav