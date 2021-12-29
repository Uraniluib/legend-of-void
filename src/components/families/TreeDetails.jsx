import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Popover from '@mui/material/Popover';
import ReactMarkdown from 'react-markdown';
import { parseMarkdown } from '../../helpers/utils.jsx';

const TreeDetails = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [data, setData] = useState();

    const handlePopoverOpen = (event, data) => {
        setAnchorEl(event.currentTarget);
        setData(data);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setData();
    };

    const open = Boolean(anchorEl);
    return (
        <Grid item xs={12} sx={{ mt: '8px', minWidth: '500px', pb: '16px' }}>
            {props.name.map((ncD, i) => (
                <ListItem key={i} align="center" disableGutters sx={{ mt: ncD.li.mt + "px" }}>
                    {
                        ncD.grid.map((g, j) => (
                            <Grid item key={j} xs={g.xs} align="center" sx={{ zIndex: g.zIndex }}>
                                {g.icon &&
                                    <g.icon
                                        color={g.color}
                                        aria-owns={open ? 'mouse-over-popover' : undefined}
                                        aria-haspopup="true"
                                        onMouseEnter={g.pop ? (e) => handlePopoverOpen(e, g) : undefined}
                                        onMouseLeave={g.pop ? handlePopoverClose : undefined}
                                    />
                                }
                                {g.dIcon &&
                                    <Divider orientation={g.ori} sx={{ height: g.height + "px" }}>
                                        <g.dIcon fontSize="small"
                                            aria-owns={open ? 'mouse-over-popover' : undefined}
                                            aria-haspopup="true"
                                            onMouseEnter={g.pop ? (e) => handlePopoverOpen(e, g) : undefined}
                                            onMouseLeave={g.pop ? handlePopoverClose : undefined}
                                        />
                                    </Divider>
                                }
                                {g.typo &&
                                    <Typography variant="body2" component="div" className="MuiTypography-gutterBottom">
                                        <ReactMarkdown children={parseMarkdown(g.typo)} />
                                    </Typography>
                                }
                            </Grid>
                        ))
                    }
                    {
                        data && <Popover
                            id={"mouse-over-popover"}
                            sx={{ pointerEvents: 'none', mt: '0.25em' }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            elevation={2}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            onClose={handlePopoverClose}
                        >
                            <Typography
                                variant="body2"
                                component="div"
                                sx={{ p: "1em 1.5em 1em 1.5em" }}
                            >
                                {data.born && <>生：{data.born}<br /></>}
                                {data.died && <>卒：{data.died}<br /></>}
                                {data.aged && <>年：{data.aged}<br /></>}
                                {data.event && <>{data.event}<br /></>}
                            </Typography>
                        </Popover>
                    }
                </ListItem>
            ))}
        </Grid>
    );
}
export default TreeDetails;
