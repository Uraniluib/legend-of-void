import * as React from 'react';
import Paper from '@mui/material/Paper';
import MaterialTable from 'material-table';
import FilterListIcon from '@mui/icons-material/FilterList';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';
import { chronicleData, ageData } from './../datasets/ChronicleData.js';

const columns = [
    { field: 'age', title: '纪元', width: '7%', lookup: ageData },
    {
        field: 'time', title: '代', width: '10%', type: 'numeric',
        customFilterAndSearch: (term, rowData) => parseInt(term) <= parseInt(rowData.time)
    },
    {
        field: 'date', title: '回', width: '10%', type: 'numeric',
        customFilterAndSearch: (term, rowData) => parseInt(term) <= parseInt(rowData.date)
    },
    { field: 'event', title: '大事件', width: '81%' }
];

export default function Chronicle() {
    const theme = useTheme();
    return (
        <Paper sx={{ margin: '1em 1em 0 1em' }}>
            <MaterialTable
                style={{ color: 'inherit', backgroundColor: 'inherit' }}
                title="初始世界编年史"
                columns={columns}
                data={chronicleData}
                icons={{
                    Filter: React.forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} style={{ color: theme.palette.primary.contrastText }} />),
                    Search: React.forwardRef((props, ref) => <ManageSearchIcon {...props} ref={ref} style={{ color: theme.palette.primary.contrastText }} />),
                    ResetSearch: React.forwardRef((props, ref) => <ClearIcon {...props} ref={ref} style={{ color: theme.palette.primary.contrastText }} />)
                }}
                options={{
                    filtering: true,
                    paging: false,
                    tableLayout: "fixed",
                    headerStyle: { color: 'inherit', backgroundColor: 'inherit' },
                    filterCellStyle: { backgroundColor: theme.palette.primary.light },
                    searchFieldStyle: { color: 'inherit', backgroundColor: 'inherit' }
                }}
                localization={{
                    toolbar: {
                        searchPlaceholder: '请输入……'
                    }
                }}
            />
        </Paper >
    );
}