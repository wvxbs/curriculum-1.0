import React from 'react'
import Header from './hero/Header'

const Hero = props => {
    return(
        <div>
          <div className="hero is-fullheight is-white mb-4">
            <Header     
              data={{
                "HeaderContent" : props.data.HeaderContent,
                "SimpleNavbarItems" :[
                  'Informações', 
                  'Experiência', 
                  'Educação'
                ],
              }}
            />
            <div className="hero-body">
              <div className="container">
                <p className="title is-huge is-bold">
                  <b>{props.data.HeroContent.title}</b>
                </p>
                <p className="subtitle">
                  {props.data.HeroContent.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Hero