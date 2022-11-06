import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoList = ({videos, onVideoSelect}) => {
    
    const listOfVideo = videos.map((video, id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
    return (
        <Grid container spacing={7}>
            {listOfVideo}
        </Grid>
    );
}
 
export default VideoList;