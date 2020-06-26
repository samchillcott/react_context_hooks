import React, {useContext} from "react";
import {MovieContext} from './MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const itemStyle = {
        backgroundColor: 'grey'
    };

    return (
		<div style={itemStyle}>
			<h3>Sam Chillcott</h3>
			<p>List Of Movies: {movies.length}</p>
		</div>
	);
};

export default Nav;
