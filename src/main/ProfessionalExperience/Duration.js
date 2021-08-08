const Duration = (props) => (
    <ul className="list-group list-group-flush">
        <li className="list-group-item professional-experience-duration">
            {props.start}
        </li>
        <li className="list-group-item professional-experience-duration">
            {props.end}
        </li>
    </ul>
)   

export default Duration