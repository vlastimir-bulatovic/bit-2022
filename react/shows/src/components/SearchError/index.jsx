import "./index.scss"
import sadEmoji from "./../../assets/sad.png";

const SearchError = () => {
    return (
        <div id="searchError" className="col-12 text-center py-5" >
            <img src={sadEmoji} alt="Sad emoji" width="100"/>
            <h2 className="my-4 mx-auto">
                We couldn't find any shows matching your search. 
            </h2>
        </div>
    )
}

export default SearchError