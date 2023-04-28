import React from "react";

const Pokemon = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />
          <div className="type">
            <div className="group">
            <h1> TYPES: </h1>
                {
                    
                    data.types.map(pok=>{
                        return(
                            <h2 className='types-font'> * {pok.type.name} </h2>
                        )
                    })
                }
              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pokemon;
