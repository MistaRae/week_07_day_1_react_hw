import React from 'react';
import Film from './Film';

const FilmList = ({allFilms}) => {

    const filmNodes = allFilms.map(film => {
        return  (
            <Film name = {film.name} key={film.id} url = {film.url}></Film>
        );
    });

    return (
        <>
        <ul>
            {filmNodes} 
        </ul>
        
        </>
    );

};

export default FilmList; 