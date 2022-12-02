import React, { useState, useEffect } from 'react'
import Cast from '../CastCard/CastCard'
import './castWrapper.scss'

import gridImg from "./../../assets/grid.png"
import listImg from "./../../assets/list.png"

function CastWrapper({showId}) {
    const [casts, setCasts] = useState([]);
    const [isGrid, setIsGrid] = useState(true);

    useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${showId}/cast`)
          .then((res) => res.json())
          .then((data) => setCasts(data))
          .catch((error) => console.log(error));
      }, []);

    return (
        <>
            <h2 className="mt-5">
                Casts
            </h2>

            <div className="text-end pb-3">
                <img  onClick={() => setIsGrid(!isGrid)} src={isGrid ? gridImg : listImg} alt="Icon"/>
            </div>
            <div className={"cast-wrapper " + (isGrid ? "d-flex gap-3 grid" : "list")}>
                
                {casts.map((element, index) => <Cast castInfo={element} key={"cast-" +index}/>)}
            </div>
        </>
    )
}

export default CastWrapper
