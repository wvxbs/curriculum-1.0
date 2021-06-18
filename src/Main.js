import './index.css'
import Header from './main/Header'
import ContactInfo from './main/ContactInfo'

const Main = () => (
    <div className="App">
        <Header 
          title="Gabriel Ferreira"
          subtitle="Estudante | Desenvolvedor"
        />
        <ContactInfo />
    </div>
)

export default Main
