import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import tmdbApi from 'api/tmdbApi';
import Video from './Video';

const VideoList = ({id}) => {

    const {category} = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const res = await tmdbApi.getVideos(category, id);
            setVideos(res.results.slice(0, 5));
        }
        getVideos();
    }, [category, id]);

    return (
        <>
            {
                videos.map((item, i) => (
                    <Video key={i} item={item}/>
                ))
            }
        </>
    );
}


export default VideoList;
