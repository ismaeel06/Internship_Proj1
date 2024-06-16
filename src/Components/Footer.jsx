import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField } from '@mui/material';

const Footer = () => {
  const icons = [
    {
      pic: '/images/Facebook.svg',
      link: 'https://www.facebook.com/visewealth?paipv=0&eav=AfZSbyklaN4qKw8XqQPP4s_mfFkx4KB95rksLqiy01UMbo-wY3BPXA1HE3OfTSZD8Yo',
    },
    {
      pic: '/images/Instagram.svg',
      link: 'https://www.instagram.com/visewealth/',
    },
    {
      pic: '/images/LinkedIn.svg',
      link: 'https://www.linkedin.com/company/visewealth/',
    },
    {
      pic: '/images/Twitter.svg',
      link: 'https://x.com/visewealth?mx=2',
    },
  ];

  const [emailText, setEmailText] = useState('Your Email ID');

  return (
    <Container
      disableGutters
      sx={{
        bgcolor: '#11141c',
        paddingX: '50.625px',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: "''",
          backgroundImage: "url('images/home-hero-fade.webp')",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          filter: 'brightness(60%)',
          zIndex: 1,
          backgroundSize: '110% 80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        },
      }}
    >
      <Box sx={{ display:{ xs:'none',md:'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', top: '480px', zIndex: 2} }}>
        <a href="#appbar">
          <img src="/images/Scroll-up.svg" alt="scrollUp" height={192} />
        </a>
      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'grid' },
          gridAutoColumns: '1fr',
          gridColumnGap: '20rem',
          gridRowGap: '20rem',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto',
          justifyContent: 'space-between',
          position: 'relative',
          bottom: '160px',
          zIndex: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '32px', fontFamily: 'Opensaucesans,sans-serif' }}>
              Join the community
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFF80', fontSize: '16px', fontFamily: 'Inter,sans-serif' }}>
              Witness the new age of<br />
              digital assets, get in touch<br />
              with the team, interact with<br />
              other Vise members and<br />
              augment your growth-<br />
              Visely.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '24px', fontFamily: 'Inter,sans-serif' }}>
              Subscribe to our newsletter
            </Typography>

            <TextField
              sx={{
                display: 'flex',
                paddingY: '0.25rem',
                alignItems: 'stretch',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'rgba(96, 101, 113, 0.5)',
                input: { color: 'rgba(206, 210, 220, 0.5)' },
                borderRadius: '3rem',
                '& fieldset': { border: 'none' },
              }}
              id="email"
              name="email"
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              InputProps={{
                style: {
                  paddingRight: '0.25rem',
                },
                endAdornment: (
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(to right, #d6b473 50%, #d6a254 50%)',
                      backgroundPosition: 'left bottom',
                      backgroundSize: '200% 100%',
                      transition: 'all 0.5s ease',
                      borderRadius: '3rem',
                      width: '196px',
                      height: '54px',
                      textTransform: 'none',
                      fontSize: '16px',
                      fontWeight: '500',
                      fontFamily: 'Opensaucesans,sans-serif',
                      padding: '0.75rem 3rem',
                      ':hover': {
                        bgcolor: '#d6a254',
                        backgroundPosition: 'right bottom',
                        transition: 'all 0.5s ease',
                        cursor: 'none',
                      },
                      color: 'black',
                    }}
                  >
                    Submit
                  </Button>
                ),
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '24px', fontFamily: 'Inter,sans-serif' }}>
              Find us @visewealth
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              {icons.map((icon,index) => (
                <a href={icon.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <img src={icon.pic} alt="icon" width={32} height={32} />
                </a>
              ))}
            </Box>
          </Box>
          <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '14px', fontFamily: 'Inter,sans-serif' }}>
            Terms & Conditions
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3rem', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography
              variant="p"
              sx={{ fontSize: '1.5rem', color: 'white', fontFamily: 'Inter,sans-serif', paddingLeft: '1rem', borderLeft: '2px solid #d6b473', fontWeight: '500' }}
            >
              Vise Gold Dubai
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFF80', fontFamily: 'Inter,sans-serif', fontWeight: '300' }}>
              Office 1607, Prime Tower, Burj Khalifa Street, Business Bay & Dubai, UAE
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <img src="/images/phone.svg" alt="phone" width={32} height={32} />
              <Typography variant="p" sx={{ color: '#A4A9B6CC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5' }}>
                +971 58 534 3044
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography
              variant="p"
              sx={{ fontSize: '1.5rem', color: 'white', fontFamily: 'Inter,sans-serif', paddingLeft: '1rem', borderLeft: '2px solid #d6b473', fontWeight: '500' }}
            >
              Vise Gold Singapore
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFF80', fontFamily: 'Inter,sans-serif', fontWeight: '300' }}>
              60 Paya Lebar Road, #09-43 Paya Lebar Square Singapore - 409051
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <img src="/images/phone.svg" alt="phone" width={32} height={32} />
              <Typography variant="p" sx={{ color: '#A4A9B6CC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5' }}>
                + 65 31594468
              </Typography>
            </Box>
          </Box>

          <Typography variant="p" sx={{ color: '#FFFFFFCC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5', fontSize: '14px' }}>
            support@visewealth.com
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontFamily: 'Inter,sans-serif', fontWeight: '500', lineHeight: '1.5', fontSize: '14px' }}>
              Policy ID:
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5', fontSize: '14px' }}>
              d68dc1635fbe10e07c52e3b519e2c31ab42362925fca1b59be90411a
            </Typography>
          </Box>
        </Box>
      </Box>


      <Box sx={{display:{md:'none',xs:'flex',flexDirection:'column',gap:'2rem',zIndex:'2'}}}>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem',zIndex:'2' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '32px', fontFamily: 'Opensaucesans,sans-serif' }}>
              Join the community
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFF80', fontSize: '16px', fontFamily: 'Inter,sans-serif' }}>
              Witness the new age of
              digital assets, get in touch
              with the team, interact with
              other Vise members and
              augment your growth-
              Visely.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem',zIndex:'2' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '24px', fontFamily: 'Inter,sans-serif',zIndex:'2' }}>
              Subscribe to our newsletter
            </Typography>

            <TextField
              sx={{
                display: 'flex',
                paddingY: '0.25rem',
                alignItems: 'stretch',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'rgba(96, 101, 113, 0.5)',
                input: { color: 'rgba(206, 210, 220, 0.5)' },
                borderRadius: '3rem',
                '& fieldset': { border: 'none' },
                zIndex:'2'
              }}
              id="email"
              name="email"
              value={emailText}
              onChange={(e) => setEmailText(e.target.value)}
              InputProps={{
                style: {
                  paddingRight: '0.25rem',
                },
                endAdornment: (
                  <Button
                    variant="contained"
                    sx={{
                      background: 'linear-gradient(to right, #d6b473 50%, #d6a254 50%)',
                      backgroundPosition: 'left bottom',
                      backgroundSize: '200% 100%',
                      transition: 'all 0.5s ease',
                      borderRadius: '3rem',
                      width: '196px',
                      height: '54px',
                      textTransform: 'none',
                      fontSize: '16px',
                      fontWeight: '500',
                      fontFamily: 'Opensaucesans,sans-serif',
                      padding: '0.75rem 3rem',
                      ':hover': {
                        bgcolor: '#d6a254',
                        backgroundPosition: 'right bottom',
                        transition: 'all 0.5s ease',
                        cursor: 'none',
                      },
                      color: 'black',
                      zIndex:'2'
                    }}
                  >
                    Submit
                  </Button>
                ),
              }}
            />
          </Box>



          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem',zIndex:'2' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontSize: '24px', fontFamily: 'Inter,sans-serif',zIndex:'2' }}>
              Find us @visewealth
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center',zIndex:'2' }}>
              {icons.map((icon,index) => (
                <a href={icon.link} target="_blank" rel="noopener noreferrer" key={index}>
                  <img src={icon.pic} alt="icon" width={32} height={32} />
                </a>
              ))}
            </Box>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem',zIndex:'2' }}>
            <Typography
              variant="p"
              sx={{ fontSize: '1.5rem', color: 'white', fontFamily: 'Inter,sans-serif', paddingLeft: '1rem', borderLeft: '2px solid #d6b473', fontWeight: '500',zIndex:'2' }}
            >
              Vise Gold Dubai
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFF80', fontFamily: 'Inter,sans-serif', fontWeight: '300',zIndex:'2' }}>
              Office 1607, Prime Tower, Burj Khalifa Street, Business Bay & Dubai, UAE
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem',zIndex:'2' }}>
              <img src="/images/phone.svg" alt="phone" width={32} height={32} />
              <Typography variant="p" sx={{ color: '#A4A9B6CC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5',zIndex:'2' }}>
                +971 58 534 3044
              </Typography>
            </Box>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem',zIndex:'2' }}>
            <Typography
              variant="p"
              sx={{ fontSize: '1.5rem', color: 'white', fontFamily: 'Inter,sans-serif', paddingLeft: '1rem', borderLeft: '2px solid #d6b473', fontWeight: '500',zIndex:'2' }}
            >
              Vise Gold Singapore
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFF80', fontFamily: 'Inter,sans-serif', fontWeight: '300',zIndex:'2' }}>
              60 Paya Lebar Road, #09-43 Paya Lebar Square Singapore - 409051
            </Typography>
            <Box sx={{ display: 'flex', gap: '1rem',zIndex:'2' }}>
              <img src="/images/phone.svg" alt="phone" width={32} height={32} />
              <Typography variant="p" sx={{ color: '#A4A9B6CC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5',zIndex:'2' }}>
                + 65 31594468
              </Typography>
            </Box>
          </Box>


          <Typography variant="p" sx={{ color: '#FFFFFFCC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5', fontSize: '14px',zIndex:'2' }}>
            support@visewealth.com
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem',zIndex:'2' }}>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontFamily: 'Inter,sans-serif', fontWeight: '500', lineHeight: '1.5', fontSize: '14px',zIndex:'2' }}>
              Policy ID:
            </Typography>
            <Typography variant="p" sx={{ color: '#FFFFFFCC', fontFamily: 'Inter,sans-serif', fontWeight: '300', lineHeight: '1.5', fontSize: '14px',zIndex:'2' }}>
              d68dc1635fbe10e07c52e3b519e2c31ab42362925fca1b59be90411a
            </Typography>
          </Box>








      </Box>







    </Container>
  );
};

export default Footer;
