const InfoPillItemList = (props) => {

    const RenderList = Content => {
        Content.map((item)=> {
            return (
                <li class="list-group-item">{item}</li>
            )
        })
    }

    return (
        <ul class="list-group list-group-flush">
            {RenderList(props.content)}
        </ul>
    )
}

export default InfoPillItemList