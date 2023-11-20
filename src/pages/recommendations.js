import * as React from 'react';
import {  useEffect, useState } from 'react'
import axios from 'axios';
import { CustomCard } from '../components'
import Grid from '@mui/material/Grid';

const Recommendation = () => {

    const [recommendedRepo, setRecommendedRepo] = useState([])

    useEffect(() => {
        axios.get('https://rwrbehkr47.execute-api.us-east-1.amazonaws.com/TestStage/api/repositories?userid=30')
        .then(function (response) {
            console.log('response: ', response);
            setRecommendedRepo(response.data)
        })
        .catch(function (error) {
            console.log('error: ', error);
        })
    }, [])


    return (
        <div>
            <h1 style={{textAlign:'center', marginTop:'5rem'}}>Recommendations</h1>
            <Grid container spacing={2}>
                {recommendedRepo.map(data => (
                    <Grid item xs={6} key={data.repo_url} style={{ height: '100%' }}>
                        <CustomCard content={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Recommendation;