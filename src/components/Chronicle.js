import * as React from 'react';
import Paper from '@mui/material/Paper';
import MaterialTable from 'material-table';
import { chronicleData, ageData } from './../datasets/ChronicleData.js';

const columns = [
    { field: 'age', title: '纪元', width: 10, lookup: ageData },
    { field: 'time', title: '时期/代', width: 10 },
    { field: 'date', title: '回', width: 10 },
    { field: 'event', title: '大事件', width: 70 },
    // { id: 'note', label: '备注', minWidth: 20 },
];

export default function Chronicle() {
    return (
        <Paper sx={{ margin: '1em 1em 0 1em' }}>
            <MaterialTable
                title="初始世界编年史"
                columns={columns}
                data={chronicleData}
                options={{
                    filtering: true,
                    paging: false,
                    tableLayout: "fixed"
                }}
            />
        </Paper >
    );
}