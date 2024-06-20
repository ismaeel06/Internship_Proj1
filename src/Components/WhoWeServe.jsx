import { Container,Box,Typography,Button } from '@mui/material'
import StartButton from './StartButton'
import React from 'react'

const WhoWeServe = () => {

    const data = [
        {
            title:'HNWIs, and UHNWIs',

            description:"Who wish to opt for a platform that provides reliable asset appreciation. Gold being our primary tangible asset, we're equipped with the ability to hold out a credible asset range that ensures unmatched security with cyclic earnings.",

            pic:'/images/HNWIs-and-UHNWIs.svg'

        },
        {
            title: 'Fintech Experts & Financial Advisors',

            description:'Ready to explore an uninhabited arena of Financial NFTs and meta-real platforms with a consistent growth quotient. We continue to introduce new financial tools and innovative assets that supply long-term gains with complete ownership.',

            pic:'/images/Fintech-Experts--Financial-Advisors.svg'


        }
    ]

    const dataXs = [
        {
            title:'Millennials and Wealth-Tech Enthusiasts',

            description:'Seeking opportunities to expand personal finances via both traditional and digital assets. Our financial NFTs start from as low as $50 to offer new players a chance to grow their wealth, while experiencing the digital finance industry.',

            pic:'/images/Millennials-and-Wealth-Tech-Enthusiasts.svg'

        },
        {
            title:'HNWIs, and UHNWIs',

            description:"Who wish to opt for a platform that provides reliable asset appreciation. Gold being our primary tangible asset, we're equipped with the ability to hold out a credible asset range that ensures unmatched security with cyclic earnings.",

            pic:'/images/HNWIs-and-UHNWIs.svg'

        },
        {
            title: 'Fintech Experts & Financial Advisors',

            description:'Ready to explore an uninhabited arena of Financial NFTs and meta-real platforms with a consistent growth quotient. We continue to introduce new financial tools and innovative assets that supply long-term gains with complete ownership.',

            pic:'/images/Fintech-Experts--Financial-Advisors.svg'


        }

    ]
  return (
    <Container disableGutters sx={{bgcolor:'#11141c',display:'flex',flexDirection:'column',padding:'112px 50.625px'}}>

        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',gap:'2.5rem'}}>

        <Box sx={{display:'flex',alignItems:'center',gap:'1rem'}}>

            <Box sx={{bgcolor:'#d6b473',width:'0.7rem',height:'0.7rem',borderRadius:'50%'}}></Box>

            <Typography variant='p' sx={{fontFamily:"'Space Mono',sans-serif",color:'#A4A9B6CC',fontSize:'16px',textAlign:'center',lineHeight:'1.5',letterSpacing:'0.1rem'}}>Who we serve</Typography>

        </Box>

        <Typography variant='p' sx={{fontFamily:'Opensaucesans,sans-serif',color:'#FFFFFFCC',fontSize:'3rem',lineHeight:'1.4',fontWeight:'400',textAlign:'center',letterSpacing:'0.1rem'}}>Vise Gold is curated for</Typography>

        </Box>
        

        <Box sx={{display:{xs:'none',md:'flex',flexDirection:'column'}}}>

            <Box sx={{display:'flex',flexDirection:"column" ,border:'1px solid #2f313a',borderRadius:'10px',marginTop:'68px'}}>
                <Box sx={{display:'flex',padding:'2rem 3rem',justifyContent:'space-between',alignItems:'center'}}>

                    <Box sx={{display:'flex',flexDirection:'column',gap:'2rem'}}>
                    <Typography variant='p' sx={{fontSize:'20px',fontFamily:'Inter,sans-serif',color:'white',lineHeight:'1.4',fontWeight:'500'}}>Millennials and Wealth-Tech Enthusiasts</Typography>

                    <Typography variant='p' sx={{color:'#FFFFFF80',fontFamily:'Inter,sans-serif',fontSize:'1rem'}}>
                    Seeking opportunities to expand personal<br/>finances via both traditional and digital assets.<br/>Our financial NFTs start from as low as $50 to<br/>offer new players a chance to grow their wealth,<br/>while experiencing the digital finance industry.
                    </Typography>

                        <Box sx={{display:'flex',alignItems:'flex-start',padding:'0px 0px'}}>
                        <StartButton/>
                        </Box>


                    </Box>

                <Box sx={{marginLeft:'3rem'}}>
                    <img src="/images/Millennials-and-Wealth-Tech-Enthusiasts.svg" alt="Millenials and Wealth Tech Enthusiasts" width={313} height={260}/>
                </Box>


                </Box>

            

            </Box>

        <Box sx={{display:'flex',gap:'3rem',marginTop:'3rem'}}>

        {data.map((item,index)=>(


                    <Box key={index} sx={{display:'flex',flexDirection:"column" ,border:'1px solid #2f313a',borderRadius:'10px',width:'50%'}}>
                        <Box sx={{display:'flex',flexDirection:'column',padding:'2rem 3rem',alignItems:'flex-start',gap:'2rem'}}>

                            <img src={item.pic} alt="WhoWeServePic" width={278} height={174}/>
                            <Typography variant='p' sx={{fontSize:'20px',fontFamily:'Inter,sans-serif',color:'white',lineHeight:'1.4',fontWeight:'500'}}>{item.title}</Typography>
                            <Typography variant='p' sx={{color:'#FFFFFF80',fontFamily:'Inter,sans-serif',fontSize:'1rem',lineHeight:1.5}}>{item.description}</Typography>

                            <StartButton/>

                        </Box>


                    </Box>

           
        ))}
                
                
            </Box>

        </Box>





        <Box sx={{display:{xs:'flex',md:'none',flexDirection:'column',gap:'2rem'}}}>

        {dataXs.map((item,index)=>(
                
                <Box key={index} sx={{display:'flex',flexDirection:"column" ,border:'1px solid #2f313a',borderRadius:'10px',padding:'16px 24px',gap:'2rem'}}>
                    <img src={item.pic} alt="WhoWeServePic" width={313} height={260}/>
                    <Typography variant='p' sx={{fontSize:'18px',fontFamily:'Inter,sans-serif',color:'white',fontWeight:'500'}}>
                        {item.title}
                    </Typography>

                    <Typography variant='p' sx={{fontSize:'16px',fontFamily:'Inter,sans-serif',color:'#FFFFFF80',fontWeight:'300',lineHeight:'1.5',maxWidth:'368px'}}>
                        {item.description}
                    </Typography>

                    <Box sx={{display:'flex',alignItems:'flex-start',padding:'0px 0px'}}>
                        <StartButton/>
                    </Box>
                    
                    
                </Box>
        ))}
        




        </Box>
        
            

    </Container>
  )
}

export default WhoWeServe
