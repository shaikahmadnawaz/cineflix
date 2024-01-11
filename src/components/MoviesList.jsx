/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import movies from "../data/movies.json";

const MoviesList = ({ onOpenModal, onAddToCart }) => {
  return (
    <section className="mx-auto items-center justify-between py-12 px-12">
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToCart={() => onAddToCart(movie)}
            onOpenModal={() => onOpenModal(movie)}
          />
        ))}
      </div>
    </section>
  );
};

export default MoviesList;
