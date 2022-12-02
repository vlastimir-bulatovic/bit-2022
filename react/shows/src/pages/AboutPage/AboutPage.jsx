import React from 'react'
import './aboutPage.scss'

function AboutPage() {
    return (
        <div id="aboutPage" className="container">
            <div className="row">
                <div className="col-12 col-md-6 mx-auto text-center ">
                    <div className="text-wrapper">
                        <h2 className="fw-bolder">
                            We made this site using React, Bootstrap and using TV Maze API.
                            We hope you enjoy using it! :)
                        </h2>

                        <div className="d-flex gap-4 pt-4">
                            <img className="img-fluid w-50" src="https://scontent.fbeg11-1.fna.fbcdn.net/v/t1.18169-9/13177542_1394692743890377_5547675432337285536_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=pPql_gb1sHMAX_B8tNN&_nc_ht=scontent.fbeg11-1.fna&oh=00_AfADQMolBeUvjVdyoGCZT0q0uJFEUd53VhV7t7BNdyZiPA&oe=63B01889" alt="Milos Kracunjel"/>
                            <img className="img-fluid w-50" src="https://avatars.githubusercontent.com/u/34610553?v=4" alt="Vlastimir Bulatovic"/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default AboutPage
