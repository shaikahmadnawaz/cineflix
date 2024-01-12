/* eslint-disable react/prop-types */
import { useState } from "react";
import MovieCard from "./MovieCard";
import movies from "../data/movies.json";
import { Loader2 } from "lucide-react";

const MoviesList = ({ onOpenModal, onAddToCart }) => {
  const [visibleMovies, setVisibleMovies] = useState(8);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="mx-auto items-center justify-between py-6 md:py-12 px-6 md:px-12">
      <div className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {movies.slice(0, visibleMovies).map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onAddToCart={() => onAddToCart(movie)}
            onOpenModal={() => onOpenModal(movie)}
          />
        ))}
      </div>
      {visibleMovies < movies.length && (
        <div className="mt-6 md:mt-12 flex justify-center">
          <button
            className="w-40 rounded-sm text-center text-xs font-semibold border border-gray-700 px-2 py-3 shadow-md inline-flex items-center justify-center space-x-1"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? (
              <>
                Loading movies
                <Loader2 className="ml-2 h-4 w-4 animate-spin text-yellow-400" />
              </>
            ) : (
              "Load More Movies"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default MoviesList;
