import React, { useEffect, useState } from 'react'
import {Container, AppBar, Typography, Grid, Grow} from '@mui/material' 
import { useDispatch } from 'react-redux'


import {getPosts} from './actions/posts'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import ResizePanel from "react-resize-panel";
import Split from 'react-split';
import memory from './images/memory.jpg'
import useStyles from './style'

 const App = ()=>{
     const [currentId,setCurrentId]=useState(null);
     const [clickCount,setClickCount]=useState(0);
     const classes= useStyles();
     const dispatch=useDispatch();

     useEffect(()=>{
        dispatch(getPosts());
     },[currentId,dispatch])

    return (
        <>
        
            
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">
                 ShowItOff
                </Typography>
                <img className={classes.img} src={memory} alt="posts" height="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                        
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            
        </Container>
        <Split direction='vertical' sizes={[75,25]} style={{ height: `calc(100vh - 2rem)` }}>
                 <Split  sizes={[25,75]}  className={classes.flex}>
                     <div className={classes.spacing}>
                     <Form currentId={currentId} setCurrentId={setCurrentId} clickCount={clickCount} setClickCount={setClickCount}/>
                     </div>
                     <div className={classes.spacing} >
                     <Posts  setCurrentId={setCurrentId}/>
                     </div>
                 </Split>
                <div >
                <Typography variant="h6">COUNT - {clickCount}</Typography>
                </div>
     
            </Split>
        
        </>
        
    )
}
export default App;