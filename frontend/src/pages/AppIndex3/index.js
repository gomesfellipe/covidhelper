import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';

import api from '../../services/api';

import DataTable from 'react-data-table-component';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import Delete from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';

const columns = [
    {
        cell: row => <Button row={row} />,
        allowOverflow: true,
        button: true,
        width: '56px', // custom width for icon button
      },
    {
        name: 'Username',
        selector: 'username',
        sortable: true,
    },
    {
        name: 'RG',
        selector: 'rg',
        sortable: true,
    },
    {
        name: 'Score',
        selector: 'score',
        sortable: true,
    },
];

const actions = (
    <IconButton
      color="primary"
    >
      <Add />
    </IconButton>
  );
/*   const contextActions = deleteHandler => (
    <IconButton
      color="secondary"
      onClick={deleteHandler}
    >
      <Delete />
    </IconButton>
  ); */

const TextField = styled.input`
  height: 32px;
  width: 200px;
  border-radius: 3px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border: 1px solid #e5e5e5;
  padding: 0 32px 0 16px;

  &:hover {
    cursor: pointer;
  }
`;

const ClearButton = styled.button`
  height: 32px;

`;

const SampleExpandedComponent = ({ data }) => (
    <div>
        <p>
            {data.username}
        </p>
    </div>
);

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
        <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
        <ClearButton onClick={onClear}>CLEAR</ClearButton>
    </>
);

export default function AppIndex() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const token = localStorage.getItem('token');

    const filteredItems = data.filter(item => item.username && item.username.toLowerCase().includes(filterText.toLowerCase()));

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
    }, [filterText, resetPaginationToggle]);

    const fetchUsers = useCallback(async page => {
        setLoading(true);

        await api.get(`users?page=${page}&per_page=${perPage}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setData(response.data.items);
            setTotalRows(response.data._meta.total_items);
            setLoading(false);
        }).catch(error => {
            alert(error);
        })

    }, [perPage, token]);

    const handlePageChange = page => {
        fetchUsers(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);

        await api.get(`users?page=${page}&per_page=${newPerPage}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => {
            setData(response.data.items);
            setPerPage(newPerPage);
            setLoading(false);
        }).catch(error => {
            alert(error);
        })
    };

    useEffect(() => {
        fetchUsers(1);

    }, [fetchUsers]);

    return (
        <DataTable
            title="Users"
            columns={columns}
            data={filteredItems}
            progressPending={loading}
            pagination
            paginationServer
            paginationTotalRows={totalRows}
            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            onChangeRowsPerPage={handlePerRowsChange}
            onChangePage={handlePageChange}
            expandableRows
            highlightOnHover
            expandOnRowClicked
            expandableRowsComponent={<SampleExpandedComponent />}
            actions={actions}
        />
    );
}
