import { useState, useEffect } from "react";
import "./app.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";

import {LANDING_PAGE, ABOUT_PAGE, DETAIL_PAGE} from "./constants"
import AboutPage from "./pages/AboutPage/AboutPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import Loading from "./components/Loading";
import { Route, Switch } from "react-router";

function App() {
  const [shows, setShows] = useState([]);
  const [currentPage, setCurrentPage] = useState(localStorage.getItem("currentPage") ? localStorage.getItem("currentPage") : LANDING_PAGE);
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true);

    fetch("http://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then(data => data.sort((a,b) => b.rating.average - a.rating.average))
      .then((sortedData) => setShows(sortedData))
      .catch((error) => console.log(error))
      .finally(() => setTimeout(()=> {
        setIsLoading(false)
      }, 1500))
  }, []);

  function changePage(page){
    setIsLoading(true);
    setCurrentPage(page);
    localStorage.setItem("currentPage", page);
    setTimeout(()=> {
      setIsLoading(false)
    }, 1500)
  }

  return (
    <>



      <Header goToLanding={ () => changePage(LANDING_PAGE)}  goToAbout={ () => changePage(ABOUT_PAGE)}/>

      <main>
        { isLoading ? <Loading /> : (
        <Switch>
          <Route exact path="/" >
            <LandingPage shows={shows}  goToDetail={ () => changePage(DETAIL_PAGE)} />
          </Route>

          <Route path="/about" >
            <AboutPage />
          </Route>

          <Route path="/details" >
            <DetailPage setIsLoading={setIsLoading}/>
          </Route>
      </Switch>
      )}
      </main>

      <Footer />
    </>
  );
}

export default App;
