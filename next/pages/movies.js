import PrimaryNav from '../components/PrimaryNav'
import MoviesList from '../components/MoviesList'
import CreateMovieForm from '../components/CreateMovieForm'
import * as moviesAPI from '../api/movies'

class Movies extends React.Component {
  state = {
    movies: this.props.initialMovies
  }

  handleCreateMovie = (movie) => {
    this.setState(({ movies }) => ({
      movies: [ movie ].concat(movies)
    }))

    moviesAPI.create(movie)
  }

  render() {
    const {
      movies
    } = this.state

    return (
      <main>
        <PrimaryNav />
        <CreateMovieForm onCreate={ this.handleCreateMovie } />
        <MoviesList items={ movies } />
      </main>
    )
  }
}

Movies.getInitialProps = async () => {
  return {
    initialMovies: await moviesAPI.list()
  }
}

export default Movies