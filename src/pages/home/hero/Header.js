import React, { useState } from 'react'
import Button from '../../../components/Button'
import {Link} from 'react-router-dom'

const Header = props => {

    const [isActive, setisActive] = useState(false) 

    const HandleClick = () => {
      setisActive(!isActive)
    }

    const RenderSimpleNavbarItems = Arr => (
      Arr.map(i => (
        <Link to={i.link} className="navbar-item">
          {i.title}
        </Link>
      ))
    )

    return (
      <div className="hero-head">
        <div className="navbar is-white">
          <div className="container">
            <div className="navbar-start">
              <div className="navbar-item">
                {RenderSimpleNavbarItems(props.data.HeaderContent.simpleNavbarItems)}
              </div>
              <a className={`navbar-burguer ${isActive ? "is-active" : ""}`} data-target="navbarMenuHeroC" onClick={HandleClick} aria-label="menu" aria-expanded="false">
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
              </a>
            </div>
            <div id="navbarMenuHeroC" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-end">
                <Button
                  url={props.data.HeaderContent.button.url}
                  text={props.data.HeaderContent.button.text}
                  icon={props.data.HeaderContent.button.icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header