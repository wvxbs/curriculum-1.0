import { useEffect, useState } from "react"
import FileNotFoundError from "./error/PageSizedError"
import Header from "./main/Header"
import InfoPill from "./main/InfoPill"
import RelevantInfo from "./main/RelevantInfo"
import data from './data/data.json'

const Main = () => {

  const [HeaderContent,setHeaderContent]=useState([])
  const [InfoPillContent,setInfoPillContent]=useState([])
  const [RelevantInfoContent,setRelevantInfoContent]=useState([])

  const GetData = () => (
    data.map((i) => {
      setHeaderContent(i.HeaderContent)
      setInfoPillContent(i.InfoPillContent)
      setRelevantInfoContent(i.RelevantInfoContent)
    })
  )

  useEffect(() => {
    GetData()
  })

  const RenderPopulatedComponent = (Component, Array) => (
    Array.map((i) =>(
      Component(i)
    ))
  )

  if(HeaderContent === []){
    return (
      <FileNotFoundError title="Sem Dados"/>
    )
  }
  else {
    return(
      <div className="App">
          <div>
            {RenderPopulatedComponent(Header, HeaderContent)}
          </div>
          <div>
            <div className="container">
              <div className="row mt-4">
                {RenderPopulatedComponent(InfoPill, InfoPillContent)}
              </div>
              <div className="row mt-4">
                {RenderPopulatedComponent(RelevantInfo, RelevantInfoContent)}
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Main
