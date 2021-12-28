import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TreeDescription from '../families/TreeDescription.jsx';
import FamilyTree from '../families/FamilyTree.jsx';

const Genealogy = (props) => {
    return (
        <Grid container
            component={Paper}
            sx={{ margin: '1em 1em 1em 1em', padding: '0 1em 1em 0', width: 'auto' }}
            spacing={2}>
            <Grid item xs={12} sm={5} md={4} lg={3} xl={2}>
                <TreeDescription />
            </Grid>
            <Grid item xs={12} sm={7} md={8} lg={9} xl={10}>
                <FamilyTree {...props} />
            </Grid>
        </Grid>
    );
}
export default Genealogy;