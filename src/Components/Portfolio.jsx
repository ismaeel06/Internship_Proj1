import { Container,Box,Typography,Button } from '@mui/material'
import AnimatedButton from './AnimatedButton'
import React from 'react'
import { Margin } from '@mui/icons-material'

const Portfolio = () => {

  const data = [
    {
     title:'New-Age Digital Assets',
     content:'A range of secured digital assets carrying the properties and value of their underlying physical assets. Unify, manage and grow your portfolio with ease.',
     pic:'/images/digital-assets.webp'
    },
    {
      title:"World's First Financial NFTs",
      content:'NFTs that double as future-proof financial assets with added value. Available exclusively on the Vise Marketplace.',
      pic:'/images/Financial-FNTs.webp'
      
    },
    {
      title:'Vise QuantiFi',
      content:"Founder's Desk that quantifies real-time production outputs, realized gains and daily rewards.",
      pic:'/images/Meta-Real.webp'
      
    },
    

  ]

  return (
    <Container disableGutters sx={{bgcolor:'#11141c',padding:'0px 50.625px'}}>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'48px'}}>

            <Typography variant='p' sx={{color:'#FFFFFFCC',textAlign:'center', fontSize:'3rem', fontFamily:'Opensaucesans,sans-serif'}}>
                Asset Digitization | Capital Preservation<br/>
                | Portfolio Diversification
            </Typography>

            <AnimatedButton/>
              
            <Typography variant='p' sx={{color:'#FFFFFF80', fontSize:'1rem', fontFamily:'Inter, sans-serif', fontWeight:'300',textAlign:'center',padding:'0px 50.625px',lineHeight:'1.5'}}>
                Asset digitization is the future of wealth-tech where we create digital equivalents of real-world<br/> physical or financial assets. With these new-age assets, our ecosystem caters to preserving,<br/> augmenting and diversifying your wealth.
            </Typography>
        </Box>

        <Box sx={{display:{xs:'none', md:'grid',gridAutoColumns:'1fr',gridColumnGap:'3rem',gridRowGap:'3rem',gridTemplateColumns:'1fr 1.25fr',gridTemplateRows:'auto',paddingTop:'120px'}}}>

          <Box sx={{position:'sticky',top:'72px',display:'grid',gridColumnStart:'span 1',gridColumnEnd:'span 1',gridRowStart:'span 1',gridRowEnd:'span 1',alignSelf:'start'}}>

            <Box sx={{display:'flex',gap:'48px',alignItems:'center',paddingBottom:'3rem'}}>

            <Box sx={{bgcolor:'#d6b473',width:'0.5rem',height:'0.5rem',borderRadius:'50%'}}></Box>
            <Typography variant='p' sx={{color:'#A4A9B6CC',fontFamily:"'Space Mono',sans-serif",fontSize:'1rem',lineHeight:'1.5'}}>Experience the best</Typography>

            </Box>

            <Box>
            {data.map((item,index)=>(
            <Box key={index} sx={{display:'flex',flexDirection:'column',height:'14rem',gap:'24px'}}>
                <Typography variant='p' sx={{color:'white',fontFamily:'Opensaucesans,sans-serif',fontSize:'2rem',fontWeight:'500'}}>
                    {item.title}
                </Typography>

                <Typography variant='p' sx={{color:'#FFFFFF80',fontSize:'1rem',fontWeight:'300',lineHeight:'1.5',fontFamily:'Inter,sans-serif'}}>
                  {item.content}
                </Typography>
            </Box>
        
        
        ))}
            </Box>
            
          </Box>

          <Box >
          <Box sx={{display:'grid',gridColumnStart:'span 1',gridColumnEnd:'span 1',gridRowStart:'span 1',gridRowEnd:'span 1',gridRowGap:'12rem',alignSelf:'center',paddingTop:'120px'}}>
            {data.map((item,index)=>(
              <Box key={index} sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'24rem'}}>
                <img src={item.pic} alt='portfolio' style={{width:'357.7px',height:'292.67px',objectFit:'cover'}}/>
                </Box>
            ))}
            </Box>
            
          </Box>

        </Box>
        <Box sx={{display:{md:'none',xs:'flex',flexDirection:'column',gap:'8px'}}}>

        <Box sx={{display:'flex',gap:'48px',alignItems:'center',paddingBottom:'3rem'}}>

        <Box sx={{bgcolor:'#d6b473',width:'0.5rem',height:'0.5rem',borderRadius:'50%'}}></Box>
        <Typography variant='p' sx={{color:'#A4A9B6CC',fontFamily:"'Space Mono',sans-serif",fontSize:'1rem',lineHeight:'1.5'}}>Experience the best</Typography>

        </Box>



        <Box sx={{display:'flex',flexDirection:'column',gap:'48px'}}>
            {data.map((item,index)=>(
            <Box key={index} sx={{display:'flex',flexDirection:'column',gap:'24px'}}>
                <Typography variant='p' sx={{color:'white',fontFamily:'Opensaucesans,sans-serif',fontSize:'2rem',fontWeight:'500'}}>
                    {item.title}
                </Typography>

                <Typography variant='p' sx={{color:'#FFFFFF80',fontSize:'1rem',fontWeight:'300',lineHeight:'1.5',fontFamily:'Inter,sans-serif'}}>
                  {item.content}
                </Typography>

                <img src={item.pic} alt="portfolio_pic" sx={{width:'400px',height:'488.89px',m:'32px 0px'}} />
            </Box>
        
        
        ))}
            </Box>







        

        </Box>
      
    </Container>
  )
}

export default Portfolio
