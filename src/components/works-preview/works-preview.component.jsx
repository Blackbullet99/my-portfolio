import { Link, useNavigate } from "react-router-dom"


const WorksPreview = () => {

    const navigate = useNavigate()

    const goToStylconClothing = () => {
        navigate("/work/stylcon-clothing")
    }

    const goToNetflix = () => {
        navigate("/work/netflix")
    }

    return (
        <div className="works-preview">
            <h1>Works Preview</h1>
            <br />
            <button onClick={goToStylconClothing}>Stylcon Clothing</button>
            <button onClick={goToNetflix}>Netflix</button>
            <Link to="/smart-brain">
                Smart Brain
            </Link>
        </div>
    )
}

export default WorksPreview