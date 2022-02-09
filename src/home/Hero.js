import React from 'react'
import Header from './hero/Header'

const Hero = props => {
    return(
        <div>
          <div className="hero is-fullheight is-primary">
            <Header
              SimpleNavbarItens={[
                'Informações',
                'Experiência', 
                'Educação',
              ]}
            />
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
          </div>
        </div>
      )
}

export default Hero