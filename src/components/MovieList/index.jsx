import React from 'react';
import {NavLink} from 'react-router-dom';

import movies from './../../movies.js';

const MovieList = () => {
	return (
		<nav className="movie-list">
			<ul>
				{
					movies.map((movie) => (
						<li key={movie.id}><NavLink className={({isActive}) => isActive ? 'movieMenu' : '' } to={`/movies/${movie.id}`}>{movie.title}</NavLink></li>
					))
				}
			</ul>
    </nav>
	)
}

export default MovieList;