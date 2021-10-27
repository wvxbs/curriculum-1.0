const Duration = props => (
    <div className="list-group list-group-horizontal professional-experience-duration-container">
        <p className="list-group-item professional-experience-duration">
            De: {props.start}
        </p>
        <p className="list-group-item professional-experience-duration">
            Até: {props.end}
        </p>
    </div>
)   

export default Duration