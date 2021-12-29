import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import AllOutOutlinedIcon from '@mui/icons-material/AllOutOutlined';
import AllOutTwoToneIcon from '@mui/icons-material/AllOutTwoTone';
import { mainBody, parents, parentChild } from '../../datasets/treeDescriptionData';

const TreeDescription = () => {

    // Switch toggle state
    // const [checked, setChecked] = React.useState(['']);
    const [expanded, setExpanded] = React.useState('panel3');

    // Switch toggle
    // const handleToggle = (value) => () => {
    //     const currentIndex = checked.indexOf(value);
    //     const newChecked = [...checked];

    //     if (currentIndex === -1) {
    //         newChecked.push(value);
    //     } else {
    //         newChecked.splice(currentIndex, 1);
    //     }

    //     setChecked(newChecked);
    // };

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
                    <Typography sx={{ fontWeight: '600', mr: '10px' }}>人物主体</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>普通/死亡</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <List disablePadding dense={true} sx={{ width: '100%' }}>
                        {mainBody.map((mb, i) => (
                            <ListItem key={mb.key + i} disableGutters>
                                <ListItemIcon>
                                    <mb.icon1 color={mb.color} /><mb.icon2 color={mb.color} />
                                </ListItemIcon>
                                <ListItemText id={mb.id} primary={mb.p} secondary={mb.s} />
                                {/* <Switch
                                    edge="end"
                                    size="small"
                                    color={mb.color}
                                    onChange={handleToggle(mb.key)}
                                    checked={checked.indexOf(mb.key) === -1}
                                    inputProps={{
                                        'aria-labelledby': mb.id,
                                    }}
                                /> */}
                            </ListItem>
                        ))}
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
                        {parents.map((p, j) => (
                            <ListItem key={p.g4 + j} disableGutters alignItems="center">
                                <Grid item xs={1}><AllOutOutlinedIcon /></Grid>
                                <Grid item xs={5}><Divider><p.g2 fontSize="small" />{p.g3 && <p.g3 fontSize="small" />}</Divider></Grid>
                                <Grid item xs={1}><AllOutTwoToneIcon /></Grid>
                                <Grid item xs={1} />
                                <Grid item xs={4}>
                                    <Typography variant="body2">{p.g4}</Typography>
                                </Grid>
                            </ListItem>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ fontWeight: '600', mr: '10px' }}>亲子关系</Typography>
                </AccordionSummary>
                <Divider />
                <AccordionDetails>
                    <Grid container align="center" component={List} spacing={2}>
                        {parentChild.map((pc, k) => (
                            <Grid item key={pc.key + k} xs={4}>
                                <Divider orientation="vertical" sx={{ height: "64px" }}><pc.icon fontSize="small" /></Divider>
                                <Typography variant="body2">{pc.key}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>

    );
}
export default TreeDescription;