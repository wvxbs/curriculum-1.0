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
        <div className="col-sm-auto">
            <div className="card info-pill">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                    <div>
                        <InfoPillItem content={props.content} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPill 