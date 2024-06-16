import { Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'

const StartButton = () => {
  return (
    <Button variant='contained' sx={{bgcolor:'transparent',color:'#d6b473',textTransform:'none',fontSize:'16px' ,fontFamily:'Inter,sans-serif', ":hover":{bgcolor:'transparent',color:'#d6b473',cursor:'none'}}} endIcon={<ArrowForwardIcon/>}>Get Started</Button>

  )
}

export default StartButton
