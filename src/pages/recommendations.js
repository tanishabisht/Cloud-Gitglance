import * as React from 'react';
import { CustomCard } from '../components'
import Grid from '@mui/material/Grid';

const datas = [
    {name: 'bdd-cucumber-1', like: true},
    {name: 'bdd-cucumber-2', like: true},
    {name: 'bdd-cucumber-3', like: false},
    {name: 'bdd-cucumber-4', like: true},
    {name: 'bdd-cucumber-5', like: false},
    {name: 'bdd-cucumber-6', like: true},
    {name: 'bdd-cucumber-7', like: false},
    {name: 'bdd-cucumber-4', like: true},
    {name: 'bdd-cucumber-5', like: false},
    {name: 'bdd-cucumber-6', like: true},
    {name: 'bdd-cucumber-7', like: false},
    {name: 'bdd-cucumber-4', like: true},
    {name: 'bdd-cucumber-5', like: false},
    {name: 'bdd-cucumber-6', like: true},
    {name: 'bdd-cucumber-7', like: false},
]

const Recommendation = () => {
    return (
        <div className='container'>
            <h1 style={{textAlign:'center', marginTop:'5rem'}}>Recommendations</h1>
            <Grid container spacing={2}>
                {datas.map(data => (
                    <Grid item xs={6}>
                        <CustomCard content={data} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Recommendation;