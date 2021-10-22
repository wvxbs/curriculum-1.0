import { useEffect, useState } from "react"
import axios from "axios"
import FileNotFoundError from "./error/PageSizedError"
import Header from "./main/Header"
import InfoPill from "./main/InfoPill"
import ProfessionalExperience from "./main/ProfessionalExperience"
import Footer from "./components/Footer"
import FullWidthPreLoader from "./components/FullWidthPreLoader"

const Main = props => {

  const [Loading, SetLoading] = useState(true)
  const [DataIsMissing,setDataIsMissing]=useState(true)
  const [HeaderContent,setHeaderContent]=useState([])
  const [InfoPillContent,setInfoPillContent]=useState([])
  const [ProfessionalExperienceContent,setProfessionalExperienceContent]=useState([])
  const [ErrorMessage,setErrorMessage]=useState("")

  const instance = axios.create({
    proxy: 'http://localhost:3001',
    baseURL: 'http://localhost:3001',
    responseType: 'json',
    timeout: 1000,
    headers: {
      "Content-type": "application/json"
    }
  })
  
  const FetchData = async (Route, Setter) => {
    await instance.get(`/${Route}`)
    .then(res => {
      Setter(res.data)
      setDataIsMissing(false)
    })
    .catch(error => {
      setErrorMessage(error.message)
    })
  }

  useEffect(() => {
    FetchData("Header", setHeaderContent)
    FetchData("InfoPill", setInfoPillContent)
    FetchData("ProfessionalExperience", setProfessionalExperienceContent)

    SetLoading(false)
  })

  const RenderPopulatedComponent = (Component, Array) => {
    if(!DataIsMissing) {
    return Array.map(i => {
      return Component(i)
    })
  }
  }

  if(Loading)  {
    return (
      <FullWidthPreLoader />
    )
  }
  else if(DataIsMissing) {
    console.log(ErrorMessage)
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
          <div className="section-title">
              Informações Rápidas
          </div>
          <div className="row justify-content-sm-center mt-4">
            {RenderPopulatedComponent(InfoPill, InfoPillContent)} 
          </div>
          <div className="section-title">
              Experiência Profissional
          </div>
          <div className="row mt-4">
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
