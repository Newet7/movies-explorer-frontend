import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import Navigation from "../../Navigation/Navigation";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from '../More/More';
import "./Movies.css";

function Movies() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <main>
        <SearchForm />
        <MoviesCardList />
        <More />
      </main>
      <Footer />
    </>
  );
}

export default Movies;