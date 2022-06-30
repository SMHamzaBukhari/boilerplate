import { Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Users = () => {
  const[renderdata,setRenderdata]=useState([]);
  const renderAPI = () =>{
    let api = 'https://jsonplaceholder.typicode.com/users';
    axios.get(api).then((success)=>{
      console.log(success.data);
      setRenderdata(success.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(()=>{
    renderAPI();
  },[])
  return (
    <div>
      <Typography variant='h4' sx={{textAlign:'center'}}>Users</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}}align="right">Name</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Username</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Email</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Company&nbsp;Name</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Phone</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  
            {renderdata.map((e,i) => (
              <TableRow
                key={e}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell align="right">{e.id}</TableCell>
                <TableCell align="right">{e.name}</TableCell>
                <TableCell align="right">{e.username}</TableCell>
                <TableCell align="right">{e.email}</TableCell>
                <TableCell align="right">{e.company.name}</TableCell>
                <TableCell align="right">{e.phone}</TableCell>
                <TableCell align="right">{e.website}</TableCell>
              </TableRow>
            ))} 
           
            
          
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Users;