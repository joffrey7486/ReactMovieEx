import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState('lord');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1447783824b0bc8f1f54fa0a83221be2&query=${search}&language=fr-FR`)
            .then((res) => setMoviesData(res.data.results))
    }, [search]);


    return (
        <div className='form-component'>
            <div className="form-container">
                <form>
                    <input 
                        type="text" 
                        placeholder="Entrer le titre d'un film" 
                        id='search-input' 
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <input type='submit' value="Rechercher" />
                </form>

                <div className="btn-sort-container">
                    <div className="btn-sort" id="goodToBad">Top<span>➙</span></div>
                    <div className="btn-sort" id="badToGood">Flop<span>➙</span></div>
                </div>
            </div>
            <div className="result">
                {moviesData.slice(0, 12).map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export default Form;