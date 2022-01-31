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
        <div className="information">
          <div className="container">ex
            <div>
            <div className="section-title">
                Informações Rápidas
            </div>
            <div className="row justify-content-sm-center mt-4">
              {RenderPopulatedComponent(InfoPill, props.data.InfoPillContent)} 
            </div>
            <div className="section-title">
                Experiência Profissional
            </div>
            <div className="row mt-4">
              {RenderPopulatedComponent(ProfessionalExperience, props.data.ProfessionalExperienceContent)}
            </div>
          </div>
          </div>
        </div>
      )
}

export default Information