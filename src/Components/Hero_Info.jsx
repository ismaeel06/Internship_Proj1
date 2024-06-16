import { Container,Box,Typography,Button } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'

const Hero_Info = () => {
  return (
    <Container disableGutters sx={{padding:'0px 50.625px'}}>
        <Box sx={{backgroundColor:'transparent', display:'flex', flexDirection:'column', justifyContent:'center', paddingTop:'8px', alignItems:'center', gap:'48px'}}>

            <Box>
            <Typography variant='h2' sx={{color:'#FFFFFFCC',textAlign:'center'}}>
            Safe & Efficient Wealth
            </Typography>

            <Typography variant='h2' sx={{color:'#FFFFFFCC',textAlign:'center'}}>
            Management Powered By 
            <Button variant='outlined' sx={{borderRadius:'40px', textTransform:'none', border: '1px solid #d6b473;', color:'#d6b473;', fontSize:'2.25rem',padding:'16px 48px', fontWeight:'500', fontStyle:'italic',backgroundColor:'transparent', ":hover":{border: '1px solid #d6b473;', color:'#d6b473;',cursor: 'none'}, lineHeight:'1', margin:'10px'}}>Gold</Button>
            </Typography>

            </Box>

            

            <Typography variant='p' sx={{color:'#FFFFFF80', textAlign:'center',fontSize:'18px'}}>A futuristic wealth-tech platform uniting the security of tangible assets and<br/>resilience of new-age digital assets.
            </Typography>

            <Button variant='contained' sx={{background:'linear-gradient(to right, #d6b473 50%, #d6a254 50%);',backgroundPosition:'left bottom', backgroundSize:'200% 100%', transition:'all 0.5s ease', borderRadius:'40px', width:'215.4px', height:'50px', textTransform:'none', fontSize:'16px', ":hover":{
              bgcolor: '#d6a254', backgroundPosition:'right bottom', transition: 'all 0.5s ease',cursor: 'none' 
            }, color:'black'}} endIcon={<ArrowForwardIcon/>}>Get Started</Button>

        </Box>
    </Container>
  )
}

export default Hero_Info
