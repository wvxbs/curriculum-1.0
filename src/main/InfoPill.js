import InfoPillItem from "./infopill/InfoPillItem"
import InfoPillItemList from "./infopill/InfoPillItemList"

const InfoPill = (props) => {
    return (
        <div className="col-md-auto">
            <div className="card info-pill">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                    <p className="card-text">
                        content={props.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoPill 