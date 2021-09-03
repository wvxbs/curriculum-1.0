import { useEffect } from 'react'
import data from './data.json'

const RetrieveData = () => {

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
      })

}