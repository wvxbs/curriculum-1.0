import Header from "./main/Header"
import InfoPill from "./main/InfoPill"
import RelevantInfo from "./main/RelevantInfo"

const Main = () => {

  let HeaderContent = [
    {
      title : "Gabriel Ferreira",
      subtitle : "Estudante | Desenvolvedor"
    }
  ]

  let InfoPillContent = [
    {
      title : "Objetivo",
      content: "Expandir minhas habilidades técnicas, adquirir conhecimento e realizar o melhor trabalho possível"
    },
    {
      title : "Contato",
      content: [
        "E-mail: gabriel.ferreira7854@gmail.com",
        "Celular: (11) 947393932",
        "FIxo: (11) 25911866",
      ]
    },
    {
      title : "Idiomas",
      content: "Português, Ingles (avançado/técnico) e Espanhol (intermediário)"
    },
  ]

  const RenderPopulatedComponent = (Component, Array) => (
    Array.map((i) =>(
      Component(i)
    ))
  )



  return(
    <div className="App">
        <div>
          {RenderPopulatedComponent(Header, HeaderContent)}
        </div>
        <div>
          <div className="container">
            <div className="row">
            {RenderPopulatedComponent(InfoPill, InfoPillContent)}
            </div>
            <div>
              <RelevantInfo />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
