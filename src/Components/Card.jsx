import React from 'react';
import './style.css';

const Card=({pokemon,loading, pokInfo})=>{
    console.log(pokemon);
    return (
    <>
    {
        loading ? <h1>Loading ... </h1> :
        pokemon.map((item)=>{
            return (
                <>
                    <div className='card' key={item.id} onClick={()=>pokInfo(item)}>
                    <h2>
                        {item.name}
                    </h2>
                    <img src={item.sprites.front_shiny} alt="" width='30px' height='30'/>
                    </div>
                </>
            )
        })
    }
</>
    )
}

export default Card;