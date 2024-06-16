import { Container,Box,Typography,Button } from '@mui/material'
import React from 'react'

const Track = () => {
  return (
    <Container disableGutters sx={{padding:'48px 0px',bgcolor:'#11141c',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',gap:'45rem'}}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2.5rem'}}>

        <Box sx={{display:'flex',alignItems:'center',gap:'1rem'}}>

            <Box sx={{bgcolor:'#d6b473',width:'0.7rem',height:'0.7rem',borderRadius:'50%'}}></Box>

            <Typography variant='p' sx={{fontFamily:"'Space Mono',sans-serif",color:'#A4A9B6CC',fontSize:'16px',textAlign:'center',lineHeight:'1.5',letterSpacing:'0.1rem'}}>How it Works</Typography>

        </Box>

        <Typography variant='p' sx={{fontFamily:'Opensaucesans,sans-serif',color:'#FFFFFFCC',fontSize:'3rem',lineHeight:'1.4',fontWeight:'400',textAlign:'center',letterSpacing:'0.1rem'}}>Track The Gold</Typography>
        

        </Box>

        <Button variant='contained' sx={{background:'linear-gradient(to right, #d6b473 50%, #d6a254 50%);',backgroundPosition:'left bottom', backgroundSize:'200% 100%', transition:'all 0.5s ease', borderRadius:'40px', width:'167.88px', height:'52px', textTransform:'none', fontSize:'16px', fontWeight:'500',fontFamily:'Opensaucesans,sans-serif', ":hover":{
              bgcolor: '#d6a254', backgroundPosition:'right bottom', transition: 'all 0.5s ease',cursor: 'none' 
            }, color:'black'}}>
            Brochure
        </Button>


    </Container>
  )
}

export default Track
