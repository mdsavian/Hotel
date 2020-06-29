import React from 'react';

function Banner({children, tittle, subtittle}) {
    return (
        <div className="banner">
            <h1>{tittle}            </h1>
            <div></div>
            <p>{subtittle}</p>
            {children}
        </div>
    )
}

export default Banner;