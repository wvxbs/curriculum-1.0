import Header from "./main/Header"
import ContactInfo from "./main/ContactInfo"
import InfoPill from "./main/InfoPill"

const Main = () => {
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
          <div className="container">
            <div className="row">
            {RenderPopulatedComponents(InfoPill, InfoPillContent)}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
