import React from 'react';

const Film = ({name, url}) => {


    return (
        <>
        {/* <h1>{name}</h1> */}
            <li>
                <a href={url}>{name}</a>
            </li>
        </>
    )
};


export default Film;