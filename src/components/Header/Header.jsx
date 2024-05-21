import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import {Link} from "react-scroll"


export const Header = () => {
    return (
      <header className="header">
          <img src={Logo} alt="" className="logo"/>
          <ul className="header-menu">
              <li>
                <Link
                to='home'
                span={true}
                smooth={true}
                >Home</Link></li>
              <li>
                <Link
                to='programs'
                span={true}
                smooth={true}
                >Programs</Link></li>
              <li>
                <Link
                to='reasons'
                span={true}
                smooth={true}
                >Why us</Link></li>
              <li>
                <Link
                to='Aboutus'
                span={true}
                smooth={true}
                >AboutUs</Link>
              </li>
          </ul>
      </header>
    );
  };
  