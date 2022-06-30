import { TextField, Button, Box } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { sendData, signUpUser } from '../../config/firebase/firebasemethods';
import HInput from './../../config/components/input';



function InputValue() {

    const navigate = useNavigate()

    const [userObj, setUserObj] = useState({});

    const Submit = () => {
        if (!userObj.email) {
            alert('Email is Required')
            return
        }
        if (!userObj.password || userObj.password.length < 6) {
            alert('Passsword Is Requird And Password must be greater then 6')
            return
        }
        signUpUser(userObj).then((res) => {
            console.log(res)
      
            sendData(userObj, "StudentData").then(() => {
              alert("Form Submitted Succesfully")
              navigate('/details')

              
            });
          }).catch((err) => {
            console.log(err)
          });

    }
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 5,
                        width: 528,
                        height: 928,
                    },
                }}>
                <Paper elevation={2}  className=' text-center'>
                    <Typography className='text-light' variant='h3' sx={{ mt: 2, }}> Please Fill The Form</Typography>
                    <Box className='bg-light py-2' >

                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} type='text' label="Name" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, fName: e.target.value })} type='text' label="Father Name" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, cnic: e.target.value })} type='number' label="CNIC" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, contact: e.target.value })} type='number' label="Contact" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, age: e.target.value })} type='number' label="Age" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, dateOfBirth: e.target.value })} type='date' label="Date Of Birth" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, classes: e.target.value })} type='text' label="Class" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, section: e.target.value })} type='text' label="Section" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, uuid: e.target.value })} type='text' label="I'd" variant="standard" />
                        </Box>
                        <Box>
                            <HInput onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} type='email' label="Email" variant="standard" />
                        </Box>
                        <Box>
                            <HInput className='w-75' onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} type='password' id="standard-basic" label="Password" variant="standard" />
                        </Box>
                        <Box className='w-75' sx={{ mt: 2, }}>

                        <Checkbox defaultChecked color="success" />
                        I agree to all <span className='text-primary cursor'> terms </span> and<span className='cursor text-primary'> conditions</span>.
                        </Box>
                        <Button className='w-75' sx={{ mt: 2, }} variant='contained' color='success' onClick={Submit} >Submit</Button>
                    </Box>
                  
                </Paper>
            </Box>
        </>
    )
}

export default InputValue