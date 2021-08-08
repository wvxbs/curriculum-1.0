import Duration from "./ProfessionalExperience/Duration"

const ProfessionalExperience = (props) => {

    return (
        <div className="professional-experience">
            <div>
                <h1 className="professional-experience-title">
                    {props.title}
                </h1>       
                <p className="professional-experience-company">
                    {props.company}
                </p>
                <Duration 
                    start={props.duration.start}
                    end={props.duration.end}
                />
                <p className="professional-experience-role">
                    {props.role}
                </p>
                <p className="professional-experience-description">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ProfessionalExperience