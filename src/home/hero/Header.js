import React from 'react'
import Button from './header/Button'

const Header = props => {

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
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className="navbar-burger" data-target="navbarMenuHeroC">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroC" className="navbar-menu">
              <div className="navbar-end">
                {RenderSimpleNavbarItens(props.SimpleNavbarItens)}
                <Button
                  content={{
                    "url" : "https://github.com/wvxbs",
                    "text" : "wvxbs",
                    "icon" : ""
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header