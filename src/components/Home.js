import { Card, CardActions, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {

    var [value,setValue]=useState([]);
    useEffect(()=>{
        axios.get('(https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data.users);
            setValue(value=response.data.users)
        })
    },[])

  return (
    <div>
      {value.map((data,ind)=>{
        return <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography>
          ID: {data.id}
        </Typography>
        <Typography>
          Title: {data.title}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>})}
    </div>
  )
}

export default Home
