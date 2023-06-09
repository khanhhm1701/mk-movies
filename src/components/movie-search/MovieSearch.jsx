import Button from "components/button/Button";
import Input from "components/input/Input";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { category as cate } from 'api/tmdbApi';

const MovieSearch = ({keyword, category}) => {

    const navigate = useNavigate();

    const [key, setKey] = useState(keyword ? keyword : '');

    const goToSearch = useCallback(
        () => {
            if (key.trim().length > 0) {
                navigate(`/${cate[category]}/search/${key}`);
            }
        },
        [key, category, navigate]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [key, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={key}
                onChange={(e) => setKey(e.target.value)}
            />
            <Button className="small" onClick={goToSearch}>Search</Button>
        </div>
    )
}

export default MovieSearch;