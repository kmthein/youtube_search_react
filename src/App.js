import React, { useEffect, useState } from 'react';
import youtube from './api/youtube';
import { SearchBar, VideoDetail, VideoList, VideoItem } from './components/index';
import { Grid } from '@material-ui/core';
import './App.css';
import youtube_logo from './components/Youtube_logo.png';

const App = () => {
    const [videos, setVideos] = useState([]);

    const [selectedVideo, setSelectedVideo] = useState('');

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyD-e3veKB53UVnO6NMK0eJiOsHg6SRq-bc',
                q: searchTerm,
            }
        })
        setVideos(response.data.items); 
        setSelectedVideo(response.data.items[0]);
    }


    return (
        <Grid justify='center' container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} style={{margin: '2%', display: 'flex', justifyContent: 'space-between'}}>
                        <img src={youtube_logo} alt="youtube" style={{width: '10%', height: '50%'}}/>
                            <SearchBar onFormSubmit={handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> 
    )
}


export default App;