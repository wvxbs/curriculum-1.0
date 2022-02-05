import { useEffect, useState } from 'react'
import InfoPill from "./information/InfoPill"
import ProfessionalExperience from "./information/ProfessionalExperience"

const Information = props => {

    useEffect(() => {
      SetDataIsMissing(props.data.DataIsMissing)
    })

    const [DataIsMissing, SetDataIsMissing] = useState(true)	

    const RenderPopulatedComponent = (Component, Array) => {
        if(!DataIsMissing) {
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
        <div className="title is-2">
          Experiência Profissional
        </div>
        <div className="columns">
          {RenderPopulatedComponent(ProfessionalExperience, props.data.ProfessionalExperienceContent)}
        </div>
      </div>
      )
}

export default Information
