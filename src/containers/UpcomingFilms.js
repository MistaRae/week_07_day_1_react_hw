import React  from 'react';
import FilmList from '../components/FilmList'

const UpcomingFilms = () => {

    const allFilms = [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ];

    return (
        <>
        <h2>Upcoming Films Releases for UK</h2>
        <hr class= "horizontal-line"/>
        <FilmList allFilms = {allFilms}/>
        <hr class= "horizontal-line"/>
        <button class="button" onClick={() => window.open('https://www.imdb.com/calendar/?region=gb')}> View more upcoming releases >> </button>
        </>
    )

};

export default UpcomingFilms;