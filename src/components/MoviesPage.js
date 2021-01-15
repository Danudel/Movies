import React from 'react'; 
import LiveSearchBox from './LiveSearchBox';
import './MoviesPage.css'
import MovieCard from './MovieCard';
import axios from 'axios';


class MoviesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            selectedMovies: []
        }
    }
    addMovie = (index) => {
        const movie = this.state.results[index];  
        this.setState({
            selectedActors: this.state.selectedMovies.concat(movie),
            results: []
        })
    }
    searchMovies = (searchText) => {
        if (!searchText) {
            this.setState({
                results: []
            })
            return;
        }
        

        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cb074b353fc228a6ceafe124c21ea1d7&page=1`)
            .then((r) => {
                const names = r.data.results.map((item) => {
                    return item.name;
                })
                this.setState(
                    { results: names }
                )
            })

    }
    render() {
        const moviesCards = this.state.selectedMovies.map((movie, index) => {
            return <MovieCard movieName={movie}></MovieCard>
        })
        return (
            <div className="c-movies-page">
                <LiveSearchBox
                    searchTextChanged={this.searchMovies}
                    resultSelected={this.addMovie}
                    placeholderText="Search for Movie"
                    results={this.state.results} />

                <div>{moviesCards}</div>
            </div>
        )
    }
}

export default MoviesPage;