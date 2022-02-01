import React from 'react'
import InfoPill from "./information/InfoPill"
import ProfessionalExperience from "./information/ProfessionalExperience"

const Information = props => {

    const RenderPopulatedComponent = (Component, Array) => {
        if(!props.data.DataIsMissing) {
        return Array.map(i => {
          return Component(i)
        })
      }
    }

    return(
      <div className="container">
        <div className="title is-2">
          Informações Rápidas
        </div>
        <div className="columns">
          {RenderPopulatedComponent(InfoPill, props.data.InfoPillContent)} 
        </div>
        <div>
          Experiência Profissional
        </div>
        <div className="columns">
          {RenderPopulatedComponent(ProfessionalExperience, props.data.ProfessionalExperienceContent)}
        </div>
      </div>
      )
}

export default Information