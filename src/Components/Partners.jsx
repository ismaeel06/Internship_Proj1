import { Container,Box,Typography } from '@mui/material'
import React from 'react'

const pics = [
    { source:'/images/BRINKS.webp'},
    { source:'/images/Ferrari.webp'},
    { source:'/images/sumsub.webp'},
    { source:'/images/msi-global-new.webp'},
    { source:'/images/Transguard.webp'}
]

const Partners = () => {
  return (
    <Container disableGutters sx={{bgcolor:'#11141c',display:'flex',flexDirection:'column',padding:'112px 50.625px'}}>

        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2.5rem'}}>

        <Box sx={{display:'flex',alignItems:'center',gap:'1rem'}}>

            <Box sx={{bgcolor:'#d6b473',width:'0.7rem',height:'0.7rem',borderRadius:'50%'}}></Box>

            <Typography variant='p' sx={{fontFamily:"'Space Mono',sans-serif",color:'#A4A9B6CC',fontSize:'16px',textAlign:'center',lineHeight:'1.5',letterSpacing:'0.1rem'}}>Our Partners</Typography>

        </Box>

        <Typography variant='p' sx={{fontFamily:'Opensaucesans,sans-serif',color:'#FFFFFFCC',fontSize:'3rem',lineHeight:'1.4',fontWeight:'400',textAlign:'center',letterSpacing:'0.1rem'}}>Our Ecosystem Partners</Typography>

        </Box>

        <Box sx={{display:{md:'none',xs:'flex',gap:'2rem',justifyContent:'space-between',marginTop:'4rem',flexWrap:'wrap'}}}>

            <img src="images/BRINKS.webp" alt="BRINKS" width={119.05} height={37.28}/>
            <img src="images/Ferrari.webp" alt="Ferrari" width={107.75} height={57.22}/>
            <img src="/images/sumsub.webp" alt="sumsub" width={113.74} height={41.27}/>
            <img src="/images/msi-global-new.webp" alt="msi" width={87.81} height={46.58}/>
            <img src="/images/Transguard.webp" alt="Transguard" width={69.85} height={69.85}/>


        </Box>

         <Box sx={{display:{md:'flex',xs:'none',gap:'3.5rem',justifyContent:'space-between',marginTop:'4rem',flexWrap:'wrap',alignItems:'center'}}}>

            <img src="/images/BRINKS.webp" alt="BRINKS" width={129.05} height={47.28}/>
            <img src="/images/Ferrari.webp" alt="Ferrari" width={117.75} height={67.22}/>
            <img src="/images/sumsub.webp" alt="sumsub" width={123.74} height={51.27}/>
            <img src="/images/msi-global-new.webp" alt="msi" width={97.81} height={56.58}/>
            <img src="/images/Transguard.webp" alt="Transguard" width={79.85} height={79.85}/>


        </Box>


        

            



    </Container>
  )
}

export default Partners
