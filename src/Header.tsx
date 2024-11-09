import React from 'react'
import Logo from './images/logo.png'
import { Link } from 'react-router-dom'
const Header:React.FC = () => {
  return (
    <div className='header-div'>
        <Link to={"/"}><img src={Logo} alt="logo" className='logo' /></Link>
        <ul className='header-ul'>
        <li className='header-li'><Link to={"/"}><p>Home</p></Link></li>
        <li className='header-li'><Link to={"/consequences"}><p>Consequences</p></Link></li>
        <li className='header-li'><Link to={"/about"}><p>About</p></Link></li>
        </ul>
    </div>
  )
}

export default Header
