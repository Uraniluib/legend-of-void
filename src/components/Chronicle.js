import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { chronicleData } from './../datasets/ChronicleData.js';

const columns = [
    { id: 'age', label: '纪元', minWidth: 20 },
    { id: 'time', label: '时期', minWidth: 37 },
    { id: 'event', label: '大事件', minWidth: 200 },
    // { id: 'note', label: '备注', minWidth: 20 },
];

export default function StickyHeadTable() {

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '1em' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table" size="small">
                    <TableHead>
                        <TableRow>
                            {columns.map((column, i) => (
                                <TableCell
                                    key={'head' + i}
                                    style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {chronicleData.map((row, i) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={'row' + i}>
                                        {columns.map((column, j) => {
                                            return (
                                                <TableCell key={'column' + j}>
                                                    {row[column.id]}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
