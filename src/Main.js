import Header from './main/Header'
import ContactInfo from './main/ContactInfo'
import InfoPill from './main/InfoPill'

const Main = () => {

  let ContactInformation = [
    {
      img: "",
      content: "Rua Fausto, 357",
      alt: ""
    },
    {
      img: "",
      content: "(11) 947393932",
      alt: ""
    }
  ]

  const RenderContactInfo = () => (
    ContactInformation.map((i) =>(
      <ContactInfo
        img={i.img} 
        content={i.content}
        alt={i.alt}
      />
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
          {RenderContactInfo()}
        </div>
        <div>
          <InfoPill></InfoPill>
        </div>
    </div>
  )
}

export default Main
