import React, { useState } from 'react'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination';
import Search from '../../components/Search/Search';
import SearchError from '../../components/SearchError';
import "./landingPage.scss";


const LandingPage = ({shows, goToDetail, findShow}) => {

    const [searchResults, setSearchResults] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const [page, setPage] = useState(1);
    const [numberOfShows, setNumberOfShows] = useState(shows.length);
    const [showsPerPage, setShowsPerPage] = useState(12);

    function filterShows(query){
        setIsSearch(!!query);
        setPage(1);

        if(query !== "") {
            
            setSearchResults(shows.filter(element => element.name.toLowerCase().includes(query.toLowerCase())));

            setNumberOfShows(searchResults.length);
        }
        
    }
    return (
        <>
            <div className="container">
                <div className="row mb-4">
                    <Search filterShows={filterShows} numberOfShows={ !isSearch ? shows.length : searchResults.length}/>
                </div>
                <div className="row">

                    
                    {isSearch && searchResults.slice((page-1)*showsPerPage,page*showsPerPage).map((element) => <Card show={element} key={element.id} goToDetail={goToDetail} findShow={findShow} />) }
                    {isSearch && !searchResults.length && <SearchError />}
                    {!isSearch && shows.slice((page-1)*showsPerPage,page*showsPerPage).map((element) => <Card show={element} key={element.id} goToDetail={goToDetail} findShow={findShow} />)}

                    {!isSearch && <Pagination  page={page} setPage={setPage} numberOfShows={numberOfShows} perPage={showsPerPage}/>}
                </div>
            </div>
        </>
    )
}

export default LandingPage
