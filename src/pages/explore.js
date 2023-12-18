import * as React from 'react';
import {  useEffect, useState } from 'react'
import axios from 'axios';
import { CustomCard } from '../components'
import Grid from '@mui/material/Grid';

const Explore = () => {

    const [exploreRepo, setExploreRepo] = useState([])

    useEffect(() => {
        axios.get('https://rwrbehkr47.execute-api.us-east-1.amazonaws.com/TestStage/api/explore-repositories?userid=45')
        .then(function (response) {
            console.log('response: ', response);
            setExploreRepo(response.data)
        })
        .catch(function (error) {
            console.log('error: ', error);
        })
    }, [])


    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'5rem'}}>Explore</h1>
            <Grid container spacing={2}>
                {exploreRepo.map(data => (
                    <Grid item xs={6} key={data.repo_url} style={{ height: '100%' }}>
                        <CustomCard content={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Explore;