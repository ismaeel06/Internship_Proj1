
import { Container,Box,Typography } from '@mui/material'
import React from 'react'



const Achievements = () => {
    const data = [
        {
            Icon: '/images/gold-traded.svg',
            Title: '2786.64 total ounces of Gold traded.'
    
        },
        {
            Icon: '/images/vaulting.svg',
            Title: 'Top-tier logistics and safe vaulting.'
    
        },
        {
            Icon: './images/infrastructure.svg',
            Title: 'Insured & robust mining infrastructure.'
    
        },
        {
            Icon: '/images/cost-effective.svg',
            Title: 'Efficient & cost effective structure.'
    
        }
        
    ];
  return (
    <Container disableGutters sx={{backgroundColor:'#11141c',padding:'48px 50.625px'}}>
        <Box sx={{ display:{xs:'none', md:'flex' ,gap:'8px', paddingTop:'2rem',paddingBottom:'2rem'}}}>
        {data.map((item,index)=>(
            <Box key={index} sx={{display:'flex',justifyContent:'center'}}>
                <img src={item.Icon} alt='icon' style={{width:'48px',height:'48px'}}/>
                <Typography variant='p' sx={{color:'white', textAlign:'left', paddingLeft:'8px',fontSize:'18px',gridColumnGap:'2rem',gridRowGap:'2rem'}}>{item.Title}</Typography>
            </Box>
        
        
        ))}
        </Box>

        <Box sx={{ display:{xs:'grid',gridTemplateColumns:'1fr 1fr',gridRowGap:'2rem',gridColumnGap:'2rem', md:'none'}}}>
        {data.map((item,index)=>(
            <Box key={index} sx={{display:'flex',justifyContent:'center'}}>
                <img src={item.Icon} alt='icon' style={{width:'48px',height:'48px'}}/>
                <Typography variant='p' sx={{color:'white', textAlign:'left', paddingLeft:'8px',fontSize:'16px',fontFamily:'Inter,sans-serif'}}>{item.Title}</Typography>
            </Box>
        
        
        ))}
        </Box>
        
    </Container>
  )
}

export default Achievements
