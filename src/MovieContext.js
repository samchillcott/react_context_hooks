import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			name: "Teen Wolf",
			price: "$10",
			id: 12345,
		},
		{
			name: "North Shore",
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
		<MovieContext.Provider value={"Hello"}>
			{props.children}
		</MovieContext.Provider>
	);
};
