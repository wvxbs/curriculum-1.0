const InfoPill = (props) => {

    const RenderContentAsList = (Content) => {
        return Content.map((i) => (
            <div>
                {"asdasdasdasd"}
            </div>
        ))
    }

    const RenderContent = (Content) => {
        if(Content.lenght > 0) {
            return RenderContentAsList(Content)
        } else {
            return Content
        }
    }
    return (
        <div className="col-lg-auto">
            <div className="card info-pill">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
                    <p className="card-text">
                        {RenderContent(props.content)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoPill