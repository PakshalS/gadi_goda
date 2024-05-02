// import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { Button } from '@mui/material';
// import { saveAs } from 'file-saver';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   { field: 'title', headerName: 'Title', width: 150 },
//   { field: 'description', headerName: 'Description', width: 200 },
//   { field: 'price', headerName: 'Price', type: 'number', width: 110 },
//   { field: 'discountPercentage', headerName: 'Discount%', type: 'number', width: 130 },
//   { field: 'rating', headerName: 'Rating', type: 'number', width: 110 },
//   { field: 'stock', headerName: 'Stock', type: 'number', width: 110 },
//   { field: 'brand', headerName: 'Brand', width: 130 },
//   { field: 'category', headerName: 'Category', width: 130 },
//   { field: 'thumbnail', headerName: 'Thumbnail', width: 130, renderCell: (params) => (
//     <img src={params.value} alt="Thumbnail" className="w-32 h-32 object-cover" />
//   )},
// ];

// function DataTable() {
//   const [rows, setRows] = React.useState([]);
//   const [selectionModel, setSelectionModel] = React.useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('https://dummyjson.com/products');
//       const data = await response.json();
//       setRows(data.products);
//     } catch (err) {
//       console.error("Failed to fetch products:", err);
//     }
//   };

//   React.useEffect(() => {
//     fetchProducts();
//   }, []);

//   const downloadCSV = () => {
//     const selectedRows = rows.filter(row => selectionModel.includes(row.id));
//     const csvRows = [
//       columns.map(col => `"${col.headerName}"`).join(','), // header
//       ...selectedRows.map(row => columns.map(col => `"${row[col.field]}"`).join(',')),
//     ].join('\n');

//     const blob = new Blob([csvRows], { type: 'text/csv' });
//     saveAs(blob, 'selected_data.csv');
//   };

//   return (
//     <div className="h-screen w-full bg-gray-100 p-6">
//       <Button 
//         onClick={downloadCSV} 
//         variant="contained" 
//         color="primary"
//         className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Download Selected CSV
//       </Button>
//       <div className="h-full bg-white shadow-md rounded p-4">
//         <DataGrid
//           rows={rows}
//           columns={columns}
  
//           components={{
//             Toolbar: GridToolbar,
//           }}
//           checkboxSelection
//           disableSelectionOnClick
//           onSelectionModelChange={(newSelectionModel) => {
//             setSelectionModel(newSelectionModel);
//           }}
//           selectionModel={selectionModel}
//           sx={{
//             boxShadow: 2,
//             border: 2,
//             borderColor: 'primary.light',
//             '& .MuiDataGrid-cell:hover': {
//               color: 'primary.main',
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }

// export default DataTable;
import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'price', headerName: 'Price', type: 'number', width: 110 },
  { field: 'discountPercentage', headerName: 'Discount%', type: 'number', width: 130 },
  { field: 'rating', headerName: 'Rating', type: 'number', width: 110 },
  { field: 'stock', headerName: 'Stock', type: 'number', width: 110 },
  { field: 'brand', headerName: 'Brand', width: 130 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'thumbnail', headerName: 'Thumbnail', width: 130, renderCell: (params) => (
    <img src={params.value} alt="Thumbnail" style={{ width: 50, height: 50, objectFit: 'cover' }} />
  )},
];

function DataTable() {
  const [rows, setRows] = React.useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setRows(data.products);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const downloadCSV = () => {
    const csvRows = [
      columns.map(col => `"${col.headerName}"`).join(','), // header
      ...rows.map(row => columns.map(col => `"${row[col.field]}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvRows], { type: 'text/csv' });
    saveAs(blob, 'data.csv');
  };

  return (
    <div style={{ height: '100vh', width: '100%', padding: 16 }}>
      <Button 
        onClick={downloadCSV} 
        variant="contained" 
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        Download CSV
      </Button>
      <div style={{ height: 'calc(100% - 48px)', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 25]}
          components={{
            Toolbar: GridToolbar,
          }}
          disableSelectionOnClick
          sx={{
            boxShadow: 2,
            border: 2,
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
          }}
        />
      </div>
    </div>
  );
}

export default DataTable;
