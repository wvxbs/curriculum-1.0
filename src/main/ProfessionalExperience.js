import Duration from "./ProfessionalExperience/Duration"

const ProfessionalExperience = (props) => {
    return (
        <div className="professional-experience">
            <div>
                <p className="professional-experience-company">
                    {props.company}
                </p>
                <Duration 
                    start={props.duration[0]}
                    end={props.duration[1]}
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