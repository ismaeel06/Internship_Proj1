import { Box, Container } from '@mui/material'
import Hero_Info from './Hero_Info'
import React from 'react'

const Hero = () => {
  return (
    <Container disableGutters sx={{backgroundImage: "url('images/Decorative-Lines.webp')", backgroundPosition:'center', backgroundSize:'115% 130%', height:'103vh', backgroundRepeat:'no-repeat'}}>
        
        <Box>

        <Box sx={{backgroundColor:'transparent'}}>
        <Hero_Info />
        </Box>
          
        </Box>

    </Container>
  ) 
}

export default Hero
