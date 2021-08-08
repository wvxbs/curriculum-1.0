import { useEffect, useState } from "react"
import FileNotFoundError from "./error/PageSizedError"
import Header from "./main/Header"
import InfoPill from "./main/InfoPill"
import RelevantInfo from "./main/ProfessionalExperience"
import data from './data/data.json'
import Footer from "./components/Footer"

const Main = () => {

  const [HeaderContent,setHeaderContent]=useState([])
  const [InfoPillContent,setInfoPillContent]=useState([])
  const [RelevantInfoContent,setRelevantInfoContent]=useState([])

  const GetDataFromJsonFile = () => (
    data.forEach((i) => {
      setHeaderContent(i.HeaderContent)
      setInfoPillContent(i.InfoPillContent)
      setRelevantInfoContent(i.RelevantInfoContent)
    })
  )

  useEffect(() => {
    GetDataFromJsonFile()
  })

  const RenderPopulatedComponent = (Component, ContentArray) => (
    ContentArray.map((i) =>(
      Component(i)
    ))
  )

  if(HeaderContent.length === 0) {
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
          <div className="row mt-4">
            {RenderPopulatedComponent(InfoPill, InfoPillContent)}
          </div>
          <div className="row mt-4">
            {RenderPopulatedComponent(RelevantInfo, RelevantInfoContent)}
          </div>
        </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main
