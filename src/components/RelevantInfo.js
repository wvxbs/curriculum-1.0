const RelevantInfo = (props) => {

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

export default RelevantInfo