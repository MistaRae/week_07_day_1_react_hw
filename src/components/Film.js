import React from 'react';

const Film = ({name, url}) => {


    return (
        <>
            <li>
                <a className="link" href={url}>{name}</a>
            </li>
        </>
    )
};


export default Film;