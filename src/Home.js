import { useEffect, useState } from "react"
import axios from "axios"
import FileNotFoundError from "./error/PageSizedError"
import Footer from "./components/Footer"
import FullWidthPreLoader from "./components/FullWidthPreLoader"
import Information from "./home/Information"
import Hero from "./home/Hero"

const Home = props => {

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
      <div>
        <Hero 
          data={{
            "HeaderContent" : HeaderContent,
          }}
        />
        <Information 
          data={{
            "HeaderContent" : HeaderContent,
            "InfoPillContent" : InfoPillContent,
            "ProfessionalExperienceContent" : ProfessionalExperienceContent,
            "DataIsMissing" : DataIsMissing
          }}
        />
      </div>
    )
    }
  }
}

export default Home
