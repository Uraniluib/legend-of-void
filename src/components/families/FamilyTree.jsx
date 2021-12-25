import * as React from 'react';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import NanChuTree from './NanChuTree.jsx';

const ethnicities = [{ key: 'pupae', name: '茧生' }, { key: 'viviparous', name: '胎生' }, { key: 'oviparous', name: '卵生' }];
const families = { 'pupae': [{ key: 'lan-nuo', name: '兰诺家族' }, { key: 'mao-lan-qing-yuan', name: '铆澜清愿家族' }], 'viviparous': [{ key: 'nan-chu', name: '赧滁家族' }], 'oviparous': [{ key: 'dou-li-cun', name: '豆粒村家族' }] };

function genealogyList(name) {
    switch (name) {
        case 'nan-chu':
            return <NanChuTree />
        default:
            return <Typography sx={{margin: '24px 0 0 8px'}}>请选择已有的家族树进行查看。</Typography>
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
                            <MenuItem
                                key={e.key + i}
                                value={e.key}
                            >
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
                            <MenuItem
                                key={f.key + i}
                                value={f.key}
                            >
                                {f.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            {genealogyList(family)}
        </Grid >
    );
}
export default FamilyTree;