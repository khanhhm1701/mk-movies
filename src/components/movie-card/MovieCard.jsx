import React from 'react';

import './movie-card.scss';

import { Link } from 'react-router-dom';

import Button from 'components/button/Button';

import { category as cate } from 'api/tmdbApi';
import apiConfig from 'api/apiConfig';

const MovieCard = ({category, item}) => {

    const link = '/' + cate[category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

    return (
        <Link to={link}>
            <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
                <Button>
                    <i className="bx bx-play"></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;
