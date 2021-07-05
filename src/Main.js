import Header from "./main/Header"
import ContactInfo from "./main/ContactInfo"
import InfoPill from "./main/InfoPill"

const Main = () => {

  let ContactInformation = [
    {
      content: "Rua Fausto, 357",
    },
    {
      content: "(11) 947393932",
    }
  ]

  let ProfessionaExperience = [
    {
      title : "Objetivo",
      content: "Expandir minhas habilidades técnicas, adquirir conhecimento e realizar o melhor trabalho possível"
    },
    {
      title : "Experiência Profissional",
      content: ""
    },
    {
      title : "Qualificações",
      content: ""
    },
    {
      title : "Educação",
      content: ""
    },
  ]

  const RenderPopulatedComponents = (Component, Array) => (
    Array.map((i) =>(
      Component(i)
    ))
  )



  return(
    <div className="App">
        <div>
          <Header 
            title="Gabriel Ferreira"
            subtitle="Estudante | Desenvolvedor"
          />
        </div>
        <div>
          {RenderPopulatedComponents(ContactInfo, ContactInformation)}
          <div className="container">
            <div className="row">
            {RenderPopulatedComponents(InfoPill, ProfessionaExperience)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
