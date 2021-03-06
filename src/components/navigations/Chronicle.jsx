import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import MaterialTable from 'material-table';
import ReactMarkdown from 'react-markdown';
import FilterListIcon from '@mui/icons-material/FilterList';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';
// import { chronicleData } from '../../datasets/chronicleData.jsx';
import { headers, parseMarkdown } from '../../helpers/utils.jsx';
import { ageData } from '../../helpers/constants.jsx';
import { loadChronicles } from '../../redux/actions/chronicleActions.jsx';
import chronicleReducer from '../../redux/reducers/chronicleReducer.jsx';
// import { deleteUsers, loadUsers } from '../../redux/actions/actions.jsx';


const Chronicle = () => {
    const theme = useTheme();
    let { chronicles } = useSelector(state => state.chronicles);


    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadChronicles());

    }, []);


    // const handleDelete = (id) => {
    //     if(window.confirm("Are you sure?")) {
    //         dispatch(deleteUsers);
    //     }
    // }

    // const [data, setData] = useState([
    //     { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    //     { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    // ]);

    const columns = [
        {
            field: 'id',
            title: 'ID',
            cellStyle: { width: '7%', minWidth: '90px' }
        },
        {
            field: 'age',
            title: '纪元',
            lookup: ageData,
            cellStyle: { width: '7%' },
            render: (rowData) => <ReactMarkdown children={"[" + rowData.age + "](/legend-of-void#/entry/" + rowData.age + ")"}></ReactMarkdown>
        },
        {
            field: 'time', title: '代',
            customFilterAndSearch: (term, rowData) => parseInt(term) <= parseInt(rowData.time),
            cellStyle: { width: '8%', minWidth: '90px' }
        },
        {
            field: 'date', title: '回',
            customFilterAndSearch: (term, rowData) => parseInt(term) <= parseInt(rowData.date),
            cellStyle: { width: '8%', minWidth: '90px' }
        },
        {
            field: 'event', title: '大事件',
            cellStyle: { width: '70%' },
            render: (rowData) => <ReactMarkdown children={parseMarkdown(rowData.event)}></ReactMarkdown>
        }
    ];

    return (
        chronicles && 
        chronicles.sort(function(a, b){return a.id-b.id}) && <Paper sx={{ mt: '1em' }}>
            {/* <Button
                onClick={() => handleDelete(users.id)}
                >
                    Delete
                </Button>
                <Button>
                    Edit
                </Button> */}
            <MaterialTable
                style={{ color: 'inherit', backgroundColor: 'inherit' }}
                title="初始编年史"
                columns={columns}
                data={chronicles}
                icons={{
                    Filter: React.forwardRef((props, ref) => <FilterListIcon {...props} ref={ref} style={{ color: theme.palette.primary.contrastText }} />),
                    Search: React.forwardRef((props, ref) => <ManageSearchIcon {...props} ref={ref} style={{ color: theme.palette.primary.contrastText }} />),
                    ResetSearch: React.forwardRef((props, ref) => <ClearIcon {...props} ref={ref} style={{ color: theme.palette.primary.contrastText }} />)
                }}
                options={{
                    filtering: true,
                    paging: false,
                    padding: 'dense',
                    sorting: false,
                    actionsColumnIndex: 5,
                    selection: true,
                    addRowPosition: 'first',
                    showTextRowsSelected: false,
                    showSelectAllCheckbox: false,
                    headerStyle: { color: 'inherit', backgroundColor: 'inherit', fontWeight: 'bold' },
                    rowStyle: { fontSize: '0.875rem' },
                    searchFieldStyle: { color: 'inherit', backgroundColor: 'inherit' },
                    tableLayout: 'auto',
                    actionsCellStyle: { color: 'inherit', backgroundColor: 'inherit' }
                }}
                localization={{
                    toolbar: {
                        searchPlaceholder: "请输入……"
                    },
                    header: {
                        actions: "删改"
                    },
                    body: {
                        addTooltip: "添加",
                        editTooltip: "编辑",
                        deleteTooltip: "删除",
                        searchTooltip: "查找",
                        editRow: {
                            deleteText: "确定要删除这行吗？"
                        }
                    }
                }}
                actions={[
                    {
                        tooltip: '删除所有选中的行',
                        icon: 'delete',
                        onClick: (evt, data) => alert('确定要移除这' + data.length + '行吗？')
                    }
                ]}
                editable={{
                    // onRowAdd: newData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             console.log(newData);
                    //             // dispatch(updateChronicles(chronicles, newData, headers));
                    //             setData([...chronicles, newData]);
                    //             resolve();
                    //         }, 1000)
                    //     }),
                    // onRowUpdate: (newData, oldData) =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataUpdate = [...chronicles];
                    //             const index = oldData.tableData.id;
                    //             dataUpdate[index] = newData;
                    //             // setData([...dataUpdate]);

                    //             resolve();
                    //         }, 1000)
                    //     }),
                    // onRowDelete: oldData =>
                    //     new Promise((resolve, reject) => {
                    //         setTimeout(() => {
                    //             const dataDelete = [...data];
                    //             const index = oldData.tableData.id;
                    //             dataDelete.splice(index, 1);
                    //             setData([...dataDelete]);

                    //             resolve();
                    //         }, 1000)
                    //     }),
                }}
            />
        </Paper >
    );
}
export default Chronicle; 
