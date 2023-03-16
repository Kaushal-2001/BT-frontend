import { Link } from "react-router-dom";
const Card = ({Title,Description,link}) => {
    return(
            <div className="container mt-4">
                <div className="card w-65 h-200">
                    <img className="card-img-top" src="https://via.placeholder.com/350x200?text=Card+Image" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">{Title}</h5>
                        <p className="card-text">{Description}</p>
                        <Link to={"/"+ {link}} className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </div>
    )
}
export default Card;