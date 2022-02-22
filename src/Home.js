import { useEffect, useState } from "react"
import axios from "axios"
import FileNotFoundError from "./error/PageSizedError"
import Footer from "./components/Footer"
import FullWidthPreLoader from "./components/FullWidthPreLoader"
import Information from "./home/Information"
import Hero from "./home/Hero"

const Home = () => {

  const [Loading, setLoading] = useState(true)
  const [DataIsMissing,setDataIsMissing]=useState(true)
  const [HeaderContent,setHeaderContent]=useState([])
  const [HeroContent,setHeroContent]=useState([])
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
    })
    .catch(error => {
      setErrorMessage(error.message)
    })
  }

  const ManageRequests = async() => {
    await FetchData("Header", setHeaderContent)
    await FetchData("Hero", setHeroContent)
    await FetchData("InfoPill", setInfoPillContent)
    await FetchData("ProfessionalExperience", setProfessionalExperienceContent)

    setLoading(false)
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
            "HeroContent" : HeroContent
            }}            
        />
        <Information 
          data={{
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