import * as React from 'react';
import {  useEffect, useState } from 'react'
import axios from 'axios';
import { CustomCard } from '../components'
import Grid from '@mui/material/Grid';

// const datas = [
//     {name: 'bdd-cucumber-1', like: true},
//     {name: 'bdd-cucumber-2', like: true},
//     {name: 'bdd-cucumber-3', like: false},
//     {name: 'bdd-cucumber-4', like: true},
//     {name: 'bdd-cucumber-5', like: false},
//     {name: 'bdd-cucumber-6', like: true},
//     {name: 'bdd-cucumber-7', like: false},
//     {name: 'bdd-cucumber-8', like: true},
//     {name: 'bdd-cucumber-9', like: false},
//     {name: 'bdd-cucumber-10', like: true},
//     {name: 'bdd-cucumber-11', like: false},
//     {name: 'bdd-cucumber-12', like: true},
//     {name: 'bdd-cucumber-13', like: false},
//     {name: 'bdd-cucumber-14', like: true},
//     {name: 'bdd-cucumber-15', like: false},
// ]

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