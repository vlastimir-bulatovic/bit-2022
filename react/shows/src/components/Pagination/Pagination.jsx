import React, {useEffect, useState} from 'react'
import "./pagination.scss";

const Pagination = ({page, numberOfShows, perPage, setPage}) => {
    const [pageIndex, setPageIndex] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(1);
    function createPaginationPages(){
        let pages = Math.ceil(numberOfShows/ perPage);

        if(page < 3 ) setPageIndex([1,2,3,4,5]);
        else if(page > pages - 2 ) setPageIndex([pages-4,pages-3,pages-2,pages-1,pages]);
        else setPageIndex([page-2,page-1,page,page+1,page+2])
        
    }

    useEffect(() => {
        createPaginationPages();
    }, [buttonClicked])

    return (
        <div id="pagination" className="text-center mt-4">
            { page!==1 && <button className="btn btn-gold me-3" onClick={() => {setPage(page-1); setButtonClicked(buttonClicked +1)}}>prev</button>}

            { pageIndex.map((element,index) => (
                <button key={"btn-"+index} className={"btn btn-gold me-2 " + (element == page ? "active": "")} onClick={() => {setPage(element); setButtonClicked(buttonClicked +1)}}>{element}</button>
            ))}

            { Math.ceil(numberOfShows/perPage) > page && <button className="btn btn-gold ms-1" onClick={() => {setPage(page+1); setButtonClicked(buttonClicked +1)}}>next</button>}
        </div>
    )
}

export default Pagination
