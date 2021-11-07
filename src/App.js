import './App.css';
import Header from './components/Header/Header';
import Slider1 from './components/Slider1';
import Slider2Card from './components/Slider2Card';
import Premieres from './components/Premieres';
import Categories from './components/categories';
import Footer from './components/Footer';
//import AllMovies from './components/AllMovies';
import AllMoviesFetch from './components/AllMoviesFetch';
//import SingleMovie from './components/SingleMovie';
import SingleMovieFetch from './components/SingleMovieFetch';
import Registration from './components/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Slider1/>
            <Slider2Card/>
            <Premieres/>
            <Categories/>
          </Route>
          <Route exact path="/movies">
            <AllMoviesFetch />
          </Route>
          <Route exact path="/movies/:movid">
            <SingleMovieFetch />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
        <Footer/>
    </div>
    </Router>
  );
}

export default App;
