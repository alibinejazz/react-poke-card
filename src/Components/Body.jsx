import React, { useEffect } from 'react';
import Card from './Card';
import Pokemon from './Pokemon';
import axios from 'axios';
import {useState} from 'react';


const Body=()=>{
    const [pokData, setPokData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokCard, setPokCard] = useState();

    const poke =async()=>{
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        console.log(pokData)
    }

    const getPokemon=async(res)=>{
        res.map(async(item)=>{
           const result=await axios.get(item.url)
           setPokData(state=>{
               state=[...state,result.data]
                return state;
            })
        })
    }
    useEffect(()=>{
        poke();
    },[url])
    return(
      <>
      <div className='container'>
        <div className='left-items'>
            <Card pokemon={pokData} loading={loading} pokInfo={pok=>setPokCard(pok)}/>
            <div className='btns-nextback'>
            <button onClick={()=> {setPokData([]); setUrl(prevUrl)}}>Back</button>
            <button onClick={()=>{setPokData([]); setUrl(nextUrl)}}>Next</button>
        </div>
        </div>

        <div className='right-items'>
            <Pokemon data={pokCard}/>
        </div>
      </div>
      </>
    )
  }

  export default Body;