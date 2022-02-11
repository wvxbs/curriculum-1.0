import React, { useState } from 'react'
import Button from './header/Button'

const Header = props => {

    const [isActive, setisActive] = useState(false) 

    const HandleClick = () => {
      setisActive(!isActive)
    }

    const RenderSimpleNavbarItens = Arr => (
      Arr.map(i => (
        <div className="navbar-item">
          {i}
        </div>
      ))
    )

    return (
      <div className="hero-head">
        <div className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <p className="is-bold title">Gabriel Ferreira</p>
              </a>
              <a className={`navbar-burguer ${isActive ? "is-active" : ""}`} data-target="navbarMenuHeroC" onclick={HandleClick} aria-label="menu" aria-expanded="false">
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
                <div aria-hidden="true"></div>
              </a>
            </div>
            <div id="navbarMenuHeroC" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
              <div className="navbar-end">
                {RenderSimpleNavbarItens(props.SimpleNavbarItens)}
                <Button
                  url="https://github.com/wvxbs"
                  text="wvxbs"
                  icon=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header