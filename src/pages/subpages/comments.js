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
import { padding } from '@mui/system';

const Comments = () => {
  const[renderdata,setRenderdata]=useState([]);
  const renderAPI = () =>{
    let api = 'https://jsonplaceholder.typicode.com/comments';
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
      <Typography variant='h4' sx={{textAlign:'center'}}>Comments</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}}>ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">Post&nbsp;ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="left">Name</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="left">Email</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="left">Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
  
            {renderdata.map((e,i) => (
              <TableRow
                key={e}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell >{e.id}</TableCell>
                <TableCell align="center">{e.postId}</TableCell>
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="left">{e.email}</TableCell>
                <TableCell align="left">{e.body}</TableCell>
                
              </TableRow>
            ))} 
           
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Comments;