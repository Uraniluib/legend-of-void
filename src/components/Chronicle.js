import * as React from 'react';
import Paper from '@mui/material/Paper';
import MaterialTable from 'material-table';
import FilterListIcon from '@mui/icons-material/FilterList';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';
import { chronicleData, ageData } from './../datasets/ChronicleData.js';

const columns = [
    {
        field: 'age', title: '纪元', lookup: ageData,
        cellStyle: { width: '7%' }
    },
    {
        field: 'time', title: '代', type: 'numeric',
        customFilterAndSearch: (term, rowData) => parseInt(term) <= parseInt(rowData.time),
        cellStyle: { width: '8%' }
    },
    {
        field: 'date', title: '回', type: 'numeric',
        customFilterAndSearch: (term, rowData) => parseInt(term) <= parseInt(rowData.date),
        cellStyle: { width: '8%' }
    },
    {
        field: 'event', title: '大事件',
        cellStyle: { width: '77%' }
    }
];

export default function Chronicle() {
    const theme = useTheme();
    return (
        <Paper sx={{ marginTop: '1em'}}>
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
                    headerStyle: { color: 'inherit', backgroundColor: 'inherit' },
                    rowStyle: { fontSize: '0.875rem' },
                    filterCellStyle: { backgroundColor: theme.palette.primary.light },
                    searchFieldStyle: { color: 'inherit', backgroundColor: 'inherit' },
                    tableLayout: 'auto'
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