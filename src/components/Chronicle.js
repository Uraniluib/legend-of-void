import * as React from 'react';
import { chronicleData } from './../datasets/ChronicleData.js';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {
    DataGrid,
    GridToolbarDensitySelector,
    GridToolbarFilterButton,
    GridRenderCellParams,
} from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

const columns = [
    { field: 'age', headerName: '纪元', flex: 1, width: 20, sortable: false },
    { field: 'time', headerName: '时期', flex: 1, width: 100, sortable: false },
    // { field: 'event', headerName: '大事件', flex: 35, width: 300, sortable: false },
    {
        field: 'event', headerName: '大事件', flex: 35, width: 300, sortable: false,
        renderCell: (params) => (
            <div>
                <div style={{width: '44%'}}>{params.row.event}</div>
            </div>
        )
    },
    // { field: 'note', headerName: '', width: 10, sortable: false },
];

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(props) {
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0,
                justifyContent: 'space-between',
                display: 'flex',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            }}
        >
            <div>
                <GridToolbarFilterButton />
                <GridToolbarDensitySelector />
            </div>
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="请输入……"
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{ visibility: props.value ? 'visible' : 'hidden' }}
                            onClick={props.clearSearch}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
                sx={{
                    width: {
                        xs: 1,
                        sm: 'auto',
                    },
                    m: (theme) => theme.spacing(1, 0.5, 1.5),
                    '& .MuiSvgIcon-root': {
                        mr: 0.5,
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: 1,
                        borderColor: 'divider',
                    },
                }}
            />
        </Box>
    );
}

QuickSearchToolbar.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default function QuickFilteringGrid(props) {
    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 100,
    //     maxColumns: 6,
    // });

    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState(chronicleData);

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = chronicleData.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows);
    };

    // React.useEffect(() => {
    //     setRows(chronicleData);
    // }, [chronicleData]);

    return (
        <Paper sx={{ width: 'auto', margin: '1em 1em 0 1em'}}>
            <DataGrid
                disableColumnSelector
                components={{ Toolbar: QuickSearchToolbar }}
                density='compact'
                autoHeight
                rowsPerPageOptions={[25, 50, 100, 250, 500, 1000]}
                rows={rows}
                columns={columns}
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event) => requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
            />
        </Paper>
    );
}