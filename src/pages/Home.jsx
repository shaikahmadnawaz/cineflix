import { useState } from "react";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";
import MovieModal from "../components/MovieModal";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  const addToCart = (movie) => {
    // Implement your cart logic here
    console.log(`Added ${movie.name} to the cart!`);
  };
  return (
    <section>
      <Navbar />
      <MoviesList onOpenModal={openModal} onAddToCart={addToCart} />
      {isModalOpen && (
        <MovieModal
          movie={selectedMovie}
          onCloseModal={closeModal}
          onAddToCart={() => addToCart(selectedMovie)}
        />
      )}
    </section>
  );
};

export default Home;
