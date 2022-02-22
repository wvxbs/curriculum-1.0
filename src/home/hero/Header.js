import React, { useState } from 'react'
import Button from './header/Button'

const Header = props => {

    const [isActive, setisActive] = useState(false) 

    const HandleClick = () => {
      setisActive(!isActive)
    }

    const RenderSimpleNavbarItems = Arr => (
      Arr.map(i => (
        <a className="navbar-item">
          {i}
        </a>
      ))
    )

    return (
      <div className="hero-head">
        <div className="navbar is-white">
          <div className="container">
            <div className="navbar-brand">
              <div className="navbar-item">
                <img 
                  src={props.data.HeaderContent.icon}
                />
              </div>
              <a className={`navbar-burguer ${isActive ? "is-active" : ""}`} data-target="navbarMenuHeroC" onclick={HandleClick} aria-label="menu" aria-expanded="false">
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
              </a>
            </div>
            <div id="navbarMenuHeroC" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-end">
                {RenderSimpleNavbarItems(props.data.SimpleNavbarItems)}
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