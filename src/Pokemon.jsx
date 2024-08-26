import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import PokemonItem from './PokemonItem';

const Pokemon = () => {
    const [pokemon,setPokemon] =  useState([])
    const [loding,setLoding] =  useState(true)
    const [error,setError] =  useState('')
    const [search,setSearch] =  useState('')
    const API = 'https://pokeapi.co/api/v2/pokemon?limit=104';
    const getPokemon = async()=>{
       try {
          const res = await fetch(API);
          const data = await res.json();
          // console.log(data);
          const pokeData = data.results.map(async (curPoke)=>{
               const res = await fetch(curPoke.url);
               const data = await res.json();
               return data;
          })
          // console.log(pokeData);
          const pokeresult = await Promise.all(pokeData);
          setPokemon(pokeresult)
          console.log(pokeresult);
          setLoding(false)
       } catch (error) {
          console.log(error);
          setError(error)
          setLoding(false)
       }
    }
  
     useEffect(()=>{
       getPokemon()
     },[])


     const searchData = pokemon.filter((curPoke)=>{
        return curPoke.name.toLowerCase().includes(search.toLowerCase())
     })


     if(loding){
        return (
            <div>
                <h1>Loding....</h1>
            </div>
        )
     }
     if(error){
        return (
            <div>
                <h1>{error.message}</h1>
            </div>
        )
     }
     
  return (
    <> 
       <div className='main'>
         <h1 className='hOne'>Lets show pokemon</h1>
         <div className='search'>
            <form>
                <input type="text" value={search} name='search' onChange={(e)=>setSearch(e.target.value)} placeholder='Search the poke' />
            </form>
         </div>
            <div>
                <ul className='pok'>
                    {
                        searchData.map((curElem)=>{
                        return(
                            <PokemonItem  key={curElem.id} pokemon={curElem}/>
                        )
                        })
                    }
                </ul>
            </div>
       </div>
    </>
  )
}

export default Pokemon