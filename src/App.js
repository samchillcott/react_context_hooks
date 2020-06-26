import React from "react";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import { MovieProvider } from "./MovieContext";

function App() {
	return (
		<MovieContext.Provider>
			<div className="App">
				<Nav />
				<MovieList />
			</div>
		</MovieContext.Provider>
	);
}

export default App;
