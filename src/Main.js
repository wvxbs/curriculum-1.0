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
    proxy: '',
    baseURL: '',
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
      SetLoading(false)
    })
    .catch(error => {
      setErrorMessage(error.message)
      SetLoading(false)
    })
  }

  useEffect(() => {
    FetchData("Header", setHeaderContent)
    FetchData("InfoPill", setInfoPillContent)
    FetchData("ProfessionalExperience", setProfessionalExperienceContent)
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
  else {
    if(DataIsMissing) {
      console.log(ErrorMessage)
      return (
        <FileNotFoundError title="Sem Dados" alt={ErrorMessage}/>
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
}

export default Main