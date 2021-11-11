import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products/explore')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleDleteProduct = (id) =>{
        fetch(`http://localhost:5000/products/${id}`,{
            method: 'DELETE',

        })
        .then(res => res.json())
        .then((data) => {
            if (data.deletedCount > 0) {
              alert("Are you sure you want to delete?");
            }
          });
    }
    return (
        <div>
            <h1>Manage all products: {products.length}</h1>
            <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Delete Products</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left"><Button style={{backgroundColor: '#232628', borderRadius: '0px'}} onClick={() => handleDleteProduct(row._id)}  variant="contained">Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default ManageProducts;