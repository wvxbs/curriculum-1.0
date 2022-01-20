import BoldTitle from './../components/BoldTitle'
import Subtitle from './../components/Subtitle'

const Header = (props) => (
    <div>
        <BoldTitle content={props.title}/>
        <Subtitle content={props.subtitle}/>
    </div>
)

export default Header
