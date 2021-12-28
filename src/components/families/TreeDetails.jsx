import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

const TreeDetails = (props) => {
    return (
        <Grid item xs={12} sx={{ marginTop: '8px', minWidth: '500px', paddingBottom: '16px' }}>
            {props.name.map((ncD, i) => (
                <ListItem key={i} align="center" disableGutters sx={{ marginTop: ncD.li.mt+"px" }}>
                    {
                        ncD.grid.map((g, j) => (
                            <Grid item key={j} xs={g.xs} align="center">
                                {g.icon && <g.icon color={g.color} />}
                                {g.dIcon && <Divider orientation={g.ori} sx={{ height: g.height+"px" }}><g.dIcon fontSize="small" /></Divider>}
                                {g.typo && <Typography variant="body2">{g.typo}</Typography>}
                            </Grid>
                        ))
                    }
                </ListItem>
            ))}
        </Grid>
    );
}
export default TreeDetails;
