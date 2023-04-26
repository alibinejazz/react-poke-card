import UseFetch from "../Components/UseFetch";

function Pokemon(){
    const{data, Loading, error} = UseFetch();

    if(error){
        return
            <p>Error is {error}</p>
    }
    if(Loading){
        <p>loading ..</p>
    }

    return(
        <div>
            <h1>{data.name}</h1>
            <img src={data.sprites.front_shiny} />
            </div>
    );

}

export default Pokemon;