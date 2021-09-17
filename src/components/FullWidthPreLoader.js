const FullWidthPreLoader = props => {
    return(
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-light" role="status" style={{position: "absolute", top: "40%", left: "50%",}}>
                <span style={{color: "rgba(0,0,0,0)"}} className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default FullWidthPreLoader