import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container,Box,Typography,Button } from '@mui/material'
import React from 'react'

const pics = [
    { source:'/images/Harshul.png'},
    { source:'/images/Eric.png'},
    { source:'/images/Vincent.png'},
    {source:'/images/Steve.png'},
    {source:'/images/Yara.png'},
    {source:'/images/Lilia.png'},
    {source:'/images/Gabriel.png'},
    {source:'/images/Hemphrey.png'}
]

const TeamMembers = () => {
  return (
    <Container disableGutters sx={{display:'flex',flexDirection:'column',bgcolor:'#11141c',padding:'48px 50.625px',gap:'2.5rem',alignItems:'center'}}>

        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2.5rem'}}>

            <Box sx={{display:'flex',alignItems:'center',gap:'1rem'}}>

                <Box sx={{bgcolor:'#d6b473',width:'0.7rem',height:'0.7rem',borderRadius:'50%'}}></Box>

                <Typography variant='p' sx={{fontFamily:"'Space Mono',sans-serif",color:'#A4A9B6CC',fontSize:'16px',textAlign:'center',lineHeight:'1.5',letterSpacing:'0.1rem'}}>Our Team</Typography>

            </Box>

            <Typography variant='p' sx={{fontFamily:'Opensaucesans,sans-serif',color:'#FFFFFFCC',fontSize:'3rem',lineHeight:'1.4',fontWeight:'400',textAlign:'center',letterSpacing:'0.1rem'}}>Meet Our Creators</Typography>

        </Box>

        <Box sx={{display:'flex',gap:'2.5rem',flexWrap:'wrap',marginTop:'5rem',justifyContent:'space-between'}}>
            {pics.map((pic,index) => {
                return(
                    <Box key={index} >
                        <img src={pic.source} alt='team member' style={{width:'240px',height:'480px',borderRadius:'10px'}} />
                    </Box>
                )
            })}


        </Box>

        <Button variant='outlined' sx={{borderRadius:'40px', width:'188.72px', height:'49.33px', textTransform:'none', fontSize:'16px',fontFamily:'Opensaucesans,sans-serif',fontWeight:500 , border: '1px solid #d6b473;', color:'#d6b473;', ":hover":{cursor:'none',border: '1px solid #d6b473;', color:'#d6b473;'} }} endIcon={<ArrowForwardIcon/>} >View All</Button>

    </Container>
  )
}

export default TeamMembers
