import InfoPillItem from "../infopill/InfoPillItem"
import InfoPillItemList from "../infopill/InfoPillItemList"

const InfoPill = props => {

    const VerifyIfThereIsAListOfItems = Content =>{
        if(Content.lenght > 1){
            return <InfoPillItemList content={Content} />
        }
        else {
            return <InfoPillItem content={Content} />
        }
    }

    return (
        <div className="column">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-header-title">{props.title}:</h5>
                </div>
                <div className="card-content">
                    <div className="content">
                        <InfoPillItem content={props.content} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPill 