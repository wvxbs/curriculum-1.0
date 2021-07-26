const Duration = (props) => (
    <div className="d-flex">
        <p className="professional-experience-duration">
            {props.start}
        </p>
        <p className="professional-experience-duration">
            {props.end}
        </p>
    </div>
)

export default Duration