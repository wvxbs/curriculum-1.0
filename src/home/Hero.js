import React from 'react'
import Header from './hero/Header'

const Hero = props => {
    return(
        <div>
          <div className="hero is-fullheight is-primary mb-4">
            <Header     
              SimpleNavbarItens={[
                'Informações',
                'Experiência', 
                'Educação',
              ]}
            />
            <div className="hero-body">
              <div className="container has-text-centered">
                <p className="title is-1 is-bold">
                  <b>{props.HeroContent.title}</b>
                </p>
                <p className="subtitle">
                  {props.HeroContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Hero