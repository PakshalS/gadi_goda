import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const Able = () => {
  const columns = [
    { id: 'id', label: 'Id' },
    { id: 'title', label: 'Title' },
    { id: 'description', label: 'Description' },
    { id: 'price', label: 'Price' },
    { id: 'discountPercentage', label: 'Discount%' },
    { id: 'rating', label: 'Rating' },
    { id: 'stock', label: 'Stock' },
    { id: 'brand', label: 'Brand' },
    { id: 'category', label: 'Category' },
    { id: 'thumbnail', label: 'Thumbnail', format: value => <img src={value} alt="Thumbnail" style={{ width: 50, height: 50 }}/> },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setRows(data.products))
      .catch(e => console.error("Failed to fetch products:", e.message));
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className=" bg-yellow-100 w-screen h-screen">
      <Paper sx={{ width: '100%', height:'100%' }}>
        <TableContainer component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column.id} style={{ backgroundColor: 'black', color: 'white' }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      {column.format ? column.format(row[column.id]) : row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </div>
  );
};

export default Able;
