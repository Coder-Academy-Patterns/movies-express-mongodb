import MoviesList from '../components/MoviesList'
import CreateMovieForm from '../components/CreateMovieForm'
import * as moviesAPI from '../api/movies'

class Landing extends React.Component {
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
        <CreateMovieForm onCreate={ this.handleCreateMovie } />
        <MoviesList items={ movies } />
      </main>
    )
  }
}

Landing.getInitialProps = async () => {
  return {
    initialMovies: await moviesAPI.list()
  }
}

export default Landing