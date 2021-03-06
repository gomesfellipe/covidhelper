import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import HeaderApp from '../../components/HeaderApp';

import MaterialTable from "material-table";
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const columns = [
    { title: "DATA", field: "timestamp", editable: "never" },
    { title: "ID", field: "userid", editable: "never" },
    { title: "NOME", field: "name" },
    { title: "IDADE", field: "age" },
    { title: "PESO", field: "weight" },
    { title: "PREDICAO COVID", field: "sars_cov_2_labtest_pred", editable: "never" },
    { title: "CONFIRMACAO", field: "sars_cov_2_confirmation", editable: "never" },
];

function Table(props) {
    const history = useHistory();
    return (
        <div>
            <HeaderApp />
            <div className="padding-top-bottom-offset">
                <MaterialTable
                    columns={columns}
                    data={query =>
                        new Promise((resolve, reject) => {
                            api.get(`attendances?search=${query.search}&per_page=${query.pageSize}&page=${query.page + 1}`, props.headers)
                                .then(response => {
                                    console.log("get data")
                                    resolve({
                                        data: response.data.items,
                                        page: response.data._meta.page - 1,
                                        totalCount: response.data._meta.total_items,
                                    })
                                }).catch(error => {
                                    reject()
                                })
                        })
                    }
                    editable={{
                        /* onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                api.put(`users/${oldData.id}`,
                                    {
                                        "rg": newData.rg

                                    }, props.headers)
                                    .then(response => {
                                        resolve()
                                    }).catch(error => {
                                        alert(error);
                                        reject()
                                    })
                            }), */
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                api.delete(`attendances/${oldData.id}`,
                                props.headers)
                                    .then(response => {
                                        resolve()
                                    }).catch(error => {
                                        alert(error);
                                        reject()
                                    })
                            }),
                    }}
                    title="Atendimentos"
                    /* detailPanel={[
                        {
                            tooltip: 'Show Name',
                            render: rowData => {
                                    return (
                                        <div
                                            style={{
                                                fontSize: 30,
                                                textAlign: 'center'
                                            }}
                                        >
                                            {rowData.username}
                                        </div>
                                    )  
                            },
                        }
                    ]} */
                    onRowClick={(event, rowData, togglePanel) => {
                        history.push({
                        pathname: '/report',
                        state: { detail: {"id": rowData.id} }
                      })
                    }}
                    icons={tableIcons}
                    options={{
                        exportButton: true,
                        addRowPosition: 'first'
                    }}
                    actions={[
                        {
                          icon: '+',
                          tooltip: 'Novo',
                          isFreeAction: true,
                          onClick: () => {history.push('/attendances/new')},
                        }
                      ]}
                />
            </div>
        </div>
    )
}

export default function DashBoard() {
    const [id, setId] = useState(null);
    
    
    const token = localStorage.getItem('token');
    const headers = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(() => {
        api.get('tokens', headers)
        .then(response => {
            setId(response.data.id);
        }).catch(error => {
            setId(false);
        })
    }, [headers]);

    return (
        <>
        
        <Table loggedId={id} headers={headers}/>
        
        </>
    )
}