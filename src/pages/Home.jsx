import { useState } from "react";
import MoviesList from "../components/MoviesList";
import Navbar from "../components/Navbar";
import MovieModal from "../components/MovieModal";

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  const addToCart = (movie) => {
    setCart((prevCart) => [...prevCart, movie]);
    console.log(`Added ${movie.name} to the cart!`);
  };

  const removeFromCart = (movieId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== movieId));
  };

  return (
    <section>
      <Navbar
        cartCount={cart.length}
        cartItems={cart}
        onRemoveFromCart={removeFromCart}
      />
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
