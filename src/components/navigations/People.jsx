import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const People = (props) => {
    return (
        <Grid container
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', padding: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
            People
        </Grid>
    );
}
export default People;