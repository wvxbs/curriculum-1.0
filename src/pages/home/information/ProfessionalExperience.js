import Duration from "../../../components/Duration"

const ProfessionalExperience = (props) => {
    return (
            <div className="column">
            <div className="box">
                <div>
                    <p className="title is -3">
                        {props.company}
                    </p>
                    <Duration 
                        start={props.duration[0]}
                        end={props.duration[1]}
                    />
                    <p className="">
                        {props.role}
                    </p>
                    <p className="">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalExperience