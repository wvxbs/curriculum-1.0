import Header from './main/Header'
import ContactInfo from './main/ContactInfo'
import InfoPill from './main/InfoPill'

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
      title : 'hmmmm'
    },
    {
      title : 'hmmmm'
    },
    {
      title : 'hmmmm'
    },
    {
      title : 'hmmmm'
    },    {
      title : 'hmmmm'
    },
    {
      title : 'hmmmm'
    }
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
          {RenderPopulatedComponents(InfoPill, ProfessionaExperience)}
        </div>
    </div>
  )
}

export default Main
