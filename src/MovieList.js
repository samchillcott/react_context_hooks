import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
	const [movies, setMovies] = useState([
		{
			name: "Teen Wolf",
			price: "$10",
			id: 12345,
		},
		{
			name: "Die Hard",
			price: "$10",
			id: 12456,
		},
		{
			name: "School Spirit",
			price: "$10",
			id: 23456,
		},
	]);

	return (
		<div>
			{movies.map((movie) => (
				<Movie name={movie.name} />
			))}
		</div>
	);
};

export default MovieList;
