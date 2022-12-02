import { Link } from "react-router-dom";
import "./card.scss";

const Card = ({show}) => {
    return (
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 my-3">
            <Link to="/details" className={`card  ${show.rating.average > 8.5 ? "bg-yellow" : ""}`} onClick={() => {
                    localStorage.setItem("currentShowId",show.id);
                }}>

                <img className="img-fluid" src={show.image.medium} alt=""/> 
                <div className="position-relative">
                <h5 className="px-3 py-4 mb-0 ">
                    {show.name}

                </h5>
                <span className="position-absolute rating">{show.rating.average}</span> 

                </div>
                
            </Link>
        </div>
    )
}

export default Card