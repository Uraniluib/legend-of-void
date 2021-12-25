import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import SquareTwoToneIcon from '@mui/icons-material/SquareTwoTone';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BalanceIcon from '@mui/icons-material/Balance';
import BabyChangingStationOutlinedIcon from '@mui/icons-material/BabyChangingStationOutlined';

const NanChuTree = (props) => {
    return (
        <Grid item xs={12} sx={{marginTop: '8px'}}>
            <ListItem align="center" disableGutters>
                <Grid item xs={1} align="center">
                    <CircleTwoToneIcon />
                    <Typography variant="body2">瞿琪</Typography>
                </Grid>
                <Grid item xs={6} align="center">
                    <Divider><BalanceIcon fontSize="small" /></Divider>
                    <Typography variant="body2">&nbsp;</Typography>
                </Grid>
                <Grid item xs={5} align="center"></Grid>
            </ListItem>
            <ListItem align="center" disableGutters sx={{ marginTop: '-48px' }}>
                <Grid item xs={3} align="center">
                    <Divider orientation="vertical" flexItem="true" sx={{ height: '64px' }}>
                        <BabyChangingStationOutlinedIcon />
                    </Divider>
                </Grid>
                <Grid item xs={4} align="center"></Grid>
                <Grid item xs={1} align="center">
                    <SquareTwoToneIcon />
                    <Typography variant="body2">赧滁</Typography>
                </Grid>
                <Grid item xs={3} align="center">
                    <Divider><BalanceIcon fontSize="small" /></Divider>
                    <Typography variant="body2">&nbsp;</Typography>
                </Grid>
                <Grid item xs={1} align="center">
                    <CircleTwoToneIcon />
                    <Typography variant="body2">莨烨</Typography>
                </Grid>
            </ListItem>
            <ListItem align="center" disableGutters sx={{ marginTop: '-48px' }}>
                <Grid item xs={3} align="center"></Grid>
                <Grid item xs={1} align="center">
                    <CircleTwoToneIcon />
                    <Typography variant="body2">姯夙</Typography>
                </Grid>
                <Grid item xs={3} align="center">
                    <Divider><WarningAmberIcon fontSize="small" /></Divider>
                    <Typography variant="body2">&nbsp;</Typography>
                </Grid>
                <Grid item xs={5} align="center">
                    <Divider orientation="vertical" flexItem="true" sx={{ height: '64px' }}>
                        <BabyChangingStationOutlinedIcon />
                    </Divider>
                </Grid>
            </ListItem>
            <ListItem align="center" disableGutters sx={{ marginTop: '-58px' }}>
                <Grid item xs={1} align="center"></Grid>
                <Grid item xs={1} align="center">
                    <SquareTwoToneIcon />
                    <Typography variant="body2">叶</Typography>
                </Grid>
                <Grid item xs={5} align="center">
                    <Divider orientation="vertical" flexItem="true" sx={{ height: '64px' }}>
                        <BabyChangingStationOutlinedIcon />
                    </Divider>
                </Grid>
            </ListItem>
            <ListItem align="center" disableGutters sx={{ marginTop: '-40px' }}>
                <Grid item xs={8} align="center"></Grid>
                <Grid item xs={1} align="center">
                    <SquareTwoToneIcon />
                    <Typography variant="body2">蔚</Typography>
                </Grid>
                <Grid item xs={1} align="center">
                    <Divider><PeopleOutlineIcon fontSize="small" /></Divider>
                    <Typography variant="body2">&nbsp;</Typography>
                </Grid>
                <Grid item xs={1} align="center">
                    <SquareTwoToneIcon />
                    <Typography variant="body2">岐</Typography>
                </Grid>
                <Grid item xs={1} align="center"></Grid>
            </ListItem>
            <ListItem align="center" disableGutters sx={{ marginTop: '-40px' }}>
                <Grid item xs={4} align="center"></Grid>
                <Grid item xs={1} align="center">
                    <SquareTwoToneIcon />
                    <Typography variant="body2">琴</Typography>
                </Grid>
                <Grid item xs={7} align="center"></Grid>
            </ListItem>
        </Grid>
    );
}
export default NanChuTree;