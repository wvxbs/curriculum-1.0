import React from 'react'

const Hero = props => {
    return(
        <div>
          <div className="hero is-dark is-fullheight">
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
                      <a className="navbar-item">
                        Informações
                      </a>
                      <a className="navbar-item">
                        Experiência
                      </a>
                      <a className="navbar-item">
                        Educação
                      </a>
                      <span className="navbar-item">
                        <a className="button is-success is-inverted">
                          <span className="icon">
                            <i className="fab fa-github"></i>
                          </span>
                          <span>Download</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-body">
              <div className="container has-text-centered">
                <p className="title is-1">
                  <b>Gabriel Ferreira</b>
                </p>
                <p className="subtitle">
                  Estudante | Desenvolvedor
                </p>
              </div>
            </div>
            <div className="hero-foot">
              <nav className="tabs is-boxed is-fullwidth">
                <div className="container">
                  <ul>
                    <li className="is-active"><a>Overview</a></li>
                    <li><a>Modifiers</a></li>
                    <li><a>Grid</a></li>
                    <li><a>Elements</a></li>
                    <li><a>Components</a></li>
                    <li><a>Layout</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )
}

export default Hero