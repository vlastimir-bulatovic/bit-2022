import { useEffect, useState } from "react";
import CastWrapper from "../../components/CastWrapper/CastWrapper";
import "./detailPage.scss";

const DetailPage = () => {
    const [currentShow, setCurrentShow] = useState({});
    const [showId, setshowId] = useState(localStorage.getItem("currentShowId") ? localStorage.getItem("currentShowId") : "");
    
    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${showId}`)
        .then((res) => res.json())
        .then((data) => setCurrentShow(data))
        .catch((error) => console.log(error))
    },[])
    
    return (
        <>
            <div id="detailPage" className="container">
                <div className="row">
                    <picture className="col-12 col-md-6 col-xl-4">
                        <img className="w-100" src={currentShow?.image?.medium ? currentShow?.image?.medium : currentShow?.image?.original} alt=""/>
                    </picture>

                    <div className="col-12 col-md-6 offset-xl-2 mt-4 mt-md-0">
                        <h1>{currentShow?.name}</h1>
                        <div className="mt-4 mb-3">
                            {currentShow?.genres && currentShow?.genres.map((element, index) => <span key={"genre-"+index} className=" me-3  badge rounded-pill">{element}</span>)}
                        </div>

                        <p dangerouslySetInnerHTML={{__html:currentShow?.summary}}></p>
                    </div>

                    <div className="col-12">
                        <CastWrapper showId={showId}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailPage
