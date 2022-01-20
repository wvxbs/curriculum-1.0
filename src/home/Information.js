import React from 'react'
import Header from "./information/Header"
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
          <div className="container">
            <div>
              {RenderPopulatedComponent(Header, props.data.HeaderContent)}
            </div>
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