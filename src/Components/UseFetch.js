import {useState, useEffect} from "react";

function UseFetch(){
    const[data, setData] = useState(null);
    const[Loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{
        async function fetchData(){
            try{
                setLoading(true);
                const resp = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
                const data = await resp.json();
                setData(data);
                setLoading(false);
                // erro
                // r
            }
            catch(error){
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
        return {data, Loading, error };
    
    }, [])
   
}

export default UseFetch;