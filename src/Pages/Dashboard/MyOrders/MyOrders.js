import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const MyOrders = () => {
    const {user} = useAuth();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/orders?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleDeleteOrder = (id) => {
        fetch(`http://localhost:5000/orders/${id}`,{
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
            <h1>My all orders: {products.length}</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Address</TableCell>
            <TableCell align="left">Phone</TableCell>
            <TableCell align="left">Cancel Order</TableCell>
            
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
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.phone}</TableCell>
              <TableCell align="left"><Button style={{backgroundColor: '#232628', borderRadius: '0px'}} onClick={() => handleDeleteOrder(row._id)} variant="contained">Delete</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MyOrders;