import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { deleteData, getData } from '../../config/firebase/firebasemethods';
import HButton from './../../config/components/button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function ShowDetail() {
  const [data, setData] = useState([]);


  const GetData = () => {
    getData('StudentData').then((res) => {
      setData(res);


    });
  }
  useEffect(() => {
    GetData()
  }, [])

  const DeleteData = (id) => {
    deleteData("StudentData", id)
    console.log(id)
    alert('Deleted')
  }
  return (
    <>
      <Box sx={{marginLeft:'100px'}} className='text-center py-4'>

        <Typography className='bg-light' variant='h2'>Student Portal</Typography>


      
      <Typography variant='h4' sx={{textAlign:'center'}}>Todos</Typography>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell sx={{fontWeight:'bold'}} align="right">ID</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">Name</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">Email</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="left">Father Name</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">CNIC</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">Contact</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Age</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">DOB</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="right">Class</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">Section</TableCell>
              <TableCell sx={{fontWeight:'bold'}} align="center">Delete</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
  
            {data.map((e,i) => (
              <TableRow
                key={e}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
              
                <TableCell align="right" sx={{display:'flex',flexWrap:'wrap'}}>{e.id}</TableCell>
                <TableCell align="left">{e.name}</TableCell>
                <TableCell align="left">{e.email}</TableCell>
                <TableCell align="center">{e.fName}</TableCell>
                <TableCell align="left">{e.cnic}</TableCell>
                <TableCell align="left">{e.contact}</TableCell>
                <TableCell align="left">{e.age}</TableCell>
                <TableCell align="left">{e.dateOfBirth}</TableCell>
                <TableCell align="center">{e.classes}</TableCell>
                <TableCell align="center">{e.section}</TableCell>
                <TableCell><HButton label='Delete' variant='contained' color='success' onClick={()=>DeleteData(e.id)}/></TableCell>
              </TableRow>
            ))} 
           
          </TableBody>
        </Table>
      </TableContainer>
 

      </Box>
    </>
  )
}

export default ShowDetail