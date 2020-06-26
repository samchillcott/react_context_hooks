import React, { useState } from "react";

function movielist() {
	const [movies, setMovies] = useState([
		{
			name: "Teen Wolf",
			price: "$10",
			id: "12345",
		},
		{
			name: "Die Hard",
			price: "$10",
			id: "12456",
		},
		{
			name: "High School High",
			price: "$10",
			id: "23456",
		},
	]);

	return <div></div>;
}

export default movielist;
