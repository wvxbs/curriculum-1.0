import { useEffect, useState } from "react"
import FileNotFoundError from "./error/PageSizedError"
import Header from "./main/Header"
import InfoPill from "./main/InfoPill"
import ProfessionalExperience from "./main/ProfessionalExperience"
import data from './data/data.json'
import Footer from "./components/Footer"
import FullWidthPreLoader from "./components/FullWidthPreLoader"

const Main = () => {

  const [Loading, SetLoading] = useState(true)
  const [DataIsMissing,setDataIsMissing]=useState(true)
  const [HeaderContent,setHeaderContent]=useState([])
  const [InfoPillContent,setInfoPillContent]=useState([])
  const [ProfessionalExperienceContent,setProfessionalExperienceContent]=useState([])

  const VerifyIfDataExists = () => {
    if(data.length > 0)
      setDataIsMissing(false)
  }

  const GetDataFromJsonFile = () => (
    data.forEach((i) => {
      setHeaderContent(i.HeaderContent) 
      setInfoPillContent(i.InfoPillContent)
      setProfessionalExperienceContent(i.ProfessionalExperienceContent)
    })
  )

  useEffect(() => {
    VerifyIfDataExists()
    if(!DataIsMissing)
      GetDataFromJsonFile()
    
    SetLoading(false)
  })

  const RenderPopulatedComponent = (Component, ContentArray) => (
    ContentArray.map((i) =>(
      Component(i)
    ))
  )

  if(Loading)  {
    return (
      <FullWidthPreLoader />
    )
  }
  else if(DataIsMissing) {
    return (
      <FileNotFoundError title="Sem Dados"/>
    )
  }
  else {
    return(
      <div className="App">
        <div className="container">
          <div>
            {RenderPopulatedComponent(Header, HeaderContent)}
          </div>
          <div>
          <div className="row justify-content-md-center mt-4">
            {RenderPopulatedComponent(InfoPill, InfoPillContent)}
          </div>
          <div className="row mt-4">
            <div className="professional-experience-title">
              Experiência Profissional
            </div>
            {RenderPopulatedComponent(ProfessionalExperience, ProfessionalExperienceContent)}
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main
