import React from 'react'
import { useSelector } from 'react-redux';
import {Grid, CircularProgress, Grow} from '@mui/material'
import Post from './Post/Post';

import useStyles from './style'
 

const Posts = ({setCurrentId}) => { 
    const posts= useSelector((state)=>state.posts)
    const classes= useStyles();

    console.log(posts)
    return (
       !posts.length ? <CircularProgress />:(
           <Grid className={classes.container} container alignItems="stretch" spacing={2}>
               {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
           </Grid>
       )
    )
}

export default Posts;