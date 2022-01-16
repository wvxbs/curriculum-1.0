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
    proxy: process.env.REACT_APP_BASE_PATH,
    baseURL: process.env.REACT_APP_BASE_PATH,
    responseType: 'json',
    timeout: 5000,
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

  const ManageRequests = async() => {
    await FetchData("Header", setHeaderContent)
    await FetchData("InfoPill", setInfoPillContent)
    await FetchData("ProfessionalExperience", setProfessionalExperienceContent)
  }

  useEffect(() => {
    ManageRequests()
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
