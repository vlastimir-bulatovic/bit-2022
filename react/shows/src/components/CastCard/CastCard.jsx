import React from 'react'
import './castCard.scss'

function Cast({castInfo}) {
    return (
        <div className="cast pb-3">

            <div className="content position-relative">
                <div className="front">
                    <img src={castInfo.person.image.medium} alt={castInfo.person.name}/> 
                    <h3>
                        {castInfo.person.name}
                    </h3>
                </div>
                <div className="back">
                    <img src={castInfo.character.image.medium} alt={castInfo.character.name}/> 
                    <h3 >
                        {castInfo.character.name}
                    </h3>
                </div>
            </div>
            
        </div>
    )
}

export default Cast
