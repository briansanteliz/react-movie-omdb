import React from 'react';

const Card = ({movie}) => {
    const {Title,Year,Type, Poster } = movie
    return ( 
        <>
            <div className="card">
                <div className="card-body">
                    <img src={Poster} alt=""/>
                </div>
            </div>
        </>
     );
}
 
export default Card;