import { Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const Addblog = () => {
    const { register, handleSubmit} = useForm();
    const getVal = (val)=>{
        alert('Form submitted');
        axios.post('https://reqres.in/api/users',val).then((res)=>{
            alert(`The data is posted with id ${res.data.id}`)
        })
    }
  return (
    <div>
        <Typography variant='h3'>ADD BLOG</Typography>
      <Stack
      component="form"
      sx={{
        marginTop: '40px',
        marginLeft: '38%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='name'
      {...register('name')}
        hiddenLabel
        id="filled-hidden-label-small"
        label="Blog Name"
        variant="outlined"
      />
      <TextField
      name='desc'
      {...register('desc')}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Description"
        variant="outlined"
      />
      <TextField
      name='authName'
      {...register('authName')}
        hiddenLabel
        id="filled-hidden-label-normal"
        label="Author Name"
        variant="outlined"
      />
    <Button variant='contained' onClick={handleSubmit(getVal)}>Submit</Button>
    </Stack>
    </div>
  )
}

export default Addblog
