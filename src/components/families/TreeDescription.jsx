import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import AllOutOutlinedIcon from '@mui/icons-material/AllOutOutlined';
import AllOutTwoToneIcon from '@mui/icons-material/AllOutTwoTone';
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined';
import FilterCenterFocusOutlinedIcon from '@mui/icons-material/FilterCenterFocusOutlined';
import AlbumOutlinedIcon from '@mui/icons-material/AlbumOutlined';
import AlbumTwoToneIcon from '@mui/icons-material/AlbumTwoTone';
import CheckBoxOutlineBlankSharpIcon from '@mui/icons-material/CheckBoxOutlineBlankSharp';
import SquareTwoToneIcon from '@mui/icons-material/SquareTwoTone';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import IndeterminateCheckBoxTwoToneIcon from '@mui/icons-material/IndeterminateCheckBoxTwoTone';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import HexagonTwoToneIcon from '@mui/icons-material/HexagonTwoTone';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import HeartBrokenOutlinedIcon from '@mui/icons-material/HeartBrokenOutlined';
import BlurOffIcon from '@mui/icons-material/BlurOff';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import BedroomParentOutlinedIcon from '@mui/icons-material/BedroomParentOutlined';
import BabyChangingStationOutlinedIcon from '@mui/icons-material/BabyChangingStationOutlined';
import EscalatorWarningOutlinedIcon from '@mui/icons-material/EscalatorWarningOutlined';

const TreeDescription = () => {

    const [checked, setChecked] = React.useState(['']);
    const [expanded, setExpanded] = React.useState('');

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ fontWeight: '600', marginRight: '10px' }}>人物主体</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>普通/死亡</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <List disablePadding dense={true} sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem disableGutters>
                            <ListItemIcon><AllOutOutlinedIcon /><AllOutTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-common-choose-common" primary="通性" secondary="本性通/择性通" />
                            <Switch
                                edge="end"
                                size="small"
                                color="success"
                                onChange={handleToggle('accc')}
                                checked={checked.indexOf('accc') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-common-choose-common',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><CenterFocusStrongOutlinedIcon /><FilterCenterFocusOutlinedIcon /></ListItemIcon>
                            <ListItemText id="actual-common-choose-male" primary="通择男性" secondary="本性通/择性男" />
                            <Switch
                                edge="end"
                                size="small"
                                color="info"
                                onChange={handleToggle('accm')}
                                checked={checked.indexOf('accm') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-common-choose-male',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><AlbumOutlinedIcon /><AlbumTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-common-choose-female" primary="通择女性" secondary="本性通/择性女" />
                            <Switch
                                edge="end"
                                size="small"
                                color="error"
                                onChange={handleToggle('accf')}
                                checked={checked.indexOf('accf') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-common-choose-female',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><CheckBoxOutlineBlankSharpIcon /><SquareTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-male-choose-male" primary="男性" secondary="本性男/择性男" />
                            <Switch
                                edge="end"
                                size="small"
                                color="info"
                                onChange={handleToggle('amcm')}
                                checked={checked.indexOf('amcm') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-male-choose-male',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><CircleOutlinedIcon /><CircleTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-female-choose-female" primary="女性" secondary="本性女/择性女" />
                            <Switch
                                edge="end"
                                size="small"
                                color="error"
                                onChange={handleToggle('afcf')}
                                checked={checked.indexOf('afcf') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-female-choose-female',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><IndeterminateCheckBoxOutlinedIcon /><IndeterminateCheckBoxTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-male-choose-female" primary="男择女性" secondary="本性男/择性女" />
                            <Switch
                                edge="end"
                                size="small"
                                color="error"
                                onChange={handleToggle('amcf')}
                                checked={checked.indexOf('amcf') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-male-choose-female',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><AddCircleOutlineOutlinedIcon /><AddCircleTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-female-choose-male" primary="女择男性" secondary="本性女/择性男" />
                            <Switch
                                edge="end"
                                size="small"
                                color="info"
                                onChange={handleToggle('afcm')}
                                checked={checked.indexOf('afcm') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-female-choose-male',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><HexagonOutlinedIcon /><HexagonTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-none-choose-none" primary="无性" secondary="本性无" />
                            <Switch
                                edge="end"
                                size="small"
                                color="success"
                                onChange={handleToggle('ancn')}
                                checked={checked.indexOf('ancn') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-none-choose-none',
                                }}
                            />
                        </ListItem>
                        <ListItem disableGutters>
                            <ListItemIcon><FilterVintageOutlinedIcon /><FilterVintageTwoToneIcon /></ListItemIcon>
                            <ListItemText id="actual-ele-choose-ele" primary="元素合" secondary="限元素合" />
                            <Switch
                                edge="end"
                                size="small"
                                onChange={handleToggle('aece')}
                                checked={checked.indexOf('aece') === -1}
                                inputProps={{
                                    'aria-labelledby': 'actual-ele-choose-ele',
                                }}
                            />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ fontWeight: '600', marginRight: '10px' }}>双亲关系</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Grid container align="center" component={List}>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center"><Divider><BalanceIcon fontSize="small" /></Divider></Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">婚姻关系</Typography>
                            </Grid>
                        </ListItem>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center">
                                <Divider><WarningAmberIcon fontSize="small" /></Divider>
                            </Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">偷情/出轨</Typography>
                            </Grid>
                        </ListItem>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center">
                                <Divider><BedroomParentOutlinedIcon fontSize="small" /></Divider>
                            </Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">性关系/同居</Typography>
                            </Grid>
                        </ListItem>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center">
                                <Divider><SafetyDividerIcon fontSize="small" /></Divider>
                            </Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">婚内分居</Typography>
                            </Grid>
                        </ListItem>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center">
                                <Divider><SafetyDividerIcon fontSize="small" /><CloseOutlinedIcon fontSize="small" /></Divider>
                            </Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">分居后复合</Typography>
                            </Grid>
                        </ListItem>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center">
                                <Divider><HeartBrokenOutlinedIcon fontSize="small" /></Divider>
                            </Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">离婚</Typography>
                            </Grid>
                        </ListItem>
                        <ListItem disableGutters>
                            <Grid item xs={1} align="center"><AllOutOutlinedIcon /></Grid>
                            <Grid item xs={5} align="center">
                                <Divider><HeartBrokenOutlinedIcon fontSize="small" /><CloseOutlinedIcon fontSize="small" /></Divider>
                            </Grid>
                            <Grid item xs={2} align="center"><AllOutTwoToneIcon /></Grid>
                            <Grid item xs={4}>
                                <Typography variant="body2">离婚后复婚</Typography>
                            </Grid>
                        </ListItem>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ fontWeight: '600', marginRight: '10px' }}>亲子关系</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Grid container align="center" component={List} spacing={2}>
                        <Grid item xs={4}>
                            <Divider orientation="vertical" sx={{ height: "64px" }}><BabyChangingStationOutlinedIcon /></Divider>
                            <Typography variant="body2">亲生</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider orientation="vertical" sx={{ height: "64px" }}><EscalatorWarningOutlinedIcon /></Divider>
                            <Typography variant="body2">收养</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider orientation="vertical" sx={{ height: "64px" }}><BlurOffIcon /></Divider>
                            <Typography variant="body2">早夭</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider orientation="vertical" sx={{ height: "64px" }}><PeopleOutlineIcon /></Divider>
                            <Typography variant="body2">孪生</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider orientation="vertical" sx={{ height: "64px" }}><PregnantWomanIcon /></Divider>
                            <Typography variant="body2">怀孕</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Divider orientation="vertical" sx={{ height: "64px" }}><HelpOutlineOutlinedIcon /></Divider>
                            <Typography variant="body2">未知</Typography>
                        </Grid>
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ fontWeight: '600', marginRight: '10px' }}>人际关系</Typography>
                </AccordionSummary>
                <Divider />
                {/* <AccordionDetails>
                    <Typography></Typography>
                </AccordionDetails> */}
            </Accordion>
        </>

    );
}
export default TreeDescription;