import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '../component/Card';
import Header from '../component/Header';

const UserList = () => {
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies ? window.localStorage.movies.split(",") : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios
            .get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=1447783824b0bc8f1f54fa0a83221be2&language=fr-FR`)
            .then((res) => setListData((listData) => [...listData, res.data])) 
        }
    }, []);

    return (
        <div className='user-list-page'>
            <Header />
            <h2>Coup de coeur <span>💖</span></h2>
            <div className="result">
                {listData.length > 0 ? listData.map((movie) => (
                    <Card movie={movie} key={movie.id} />
                )) : <h2>Vous n'avez pas encore de films dans votre liste de coup de coeur</h2>}
            </div>
        </div>
    );
};

export default UserList;