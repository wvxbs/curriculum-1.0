const InfoPillItemList = (props) => {

    const RenderList = Content => {
        Content.map((item)=> {
            return (
                <li className="list-group-item">{item}</li>
            )
        })
    }

    return (
        <ul className="list-group list-group-flush">
            {RenderList(props.content)}
        </ul>
    )
}

export default InfoPillItemList