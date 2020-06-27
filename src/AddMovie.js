import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [movies, setMovies] = useContext(MovieContext);

	const updateName = (e) => {
		// take teh value of input 1 and set it to state
		setName(e.target.value);
	};

	const updatePrice = (e) => {
		// take teh value of input 2 and set it to state
		setPrice(e.target.value);
	};

	// onSubmit = take teh name and price values and add it to the movie state as another entry/object

	const addMovie = (e) => {
		e.preventDefault();
		setMovies((prevMovies) => [...prevMovies, { name: name, price: price }]);
		setName("");
		setPrice("");
	};

	return (
		<form onSubmit={addMovie}>
			<input
				type="text"
				name="name"
				placeholder="Movie name"
				value={name}
				onChange={updateName}
			/>
			<input
				type="text"
				name="price"
				placeholder="Price"
				value={price}
				onChange={updatePrice}
			/>
			<button>Submit</button>
		</form>
	);
};

export default AddMovie;
