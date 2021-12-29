import * as React from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import TreeDetails from './TreeDetails.jsx';
import { ethnicities, families, nc } from '../../datasets/familyTreeData.jsx';

// 通过不同的family和type返回不同的家族树
function genealogyList(family) {
    switch (family) {
        case 'nan-chu':
            return <TreeDetails name={nc} />
        default:
            return <Typography sx={{ m: '8px 0 0 8px' }}>请选择已有的家族树进行查看。</Typography>
    }
}

const FamilyTree = (props) => {

    const [ethnicity, setEthnicity] = React.useState('');
    const [family, setFamily] = React.useState('');

    const handleFamilyChange = (event) => {
        setFamily(event.target.value);
    };
    const handleEthnicityChange = (event) => {
        setEthnicity(event.target.value);
    };

    return (
        <Grid container>
            <Grid item xs={12}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="ethnicity-select-standard-label">种族</InputLabel>
                    <Select
                        labelId="ethnicity-select-standard-label"
                        id="ethnicity-select-standard"
                        value={ethnicity}
                        onChange={handleEthnicityChange}
                        label="种族"
                    >
                        {ethnicities.map((e, i) => (
                            <MenuItem key={e.key + i} value={e.key}>
                                {e.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 240 }}>
                    <InputLabel id="family-tree-select-standard-label">家族</InputLabel>
                    <Select
                        labelId="family-tree-select-standard-label"
                        id="family-tree-select-standard"
                        value={family}
                        onChange={handleFamilyChange}
                        label="家族"
                    >
                        {ethnicity && families[ethnicity].map((f, i) => (
                            <MenuItem key={f.key + i} value={f.key}>
                                {f.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid container sx={{ overflowX: 'auto' }}>
                {genealogyList(family)}
            </Grid>
        </Grid >
    );
}
export default FamilyTree;
