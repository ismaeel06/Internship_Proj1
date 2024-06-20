import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';


const pages = [{name:'Viseclub',id:'#'}, {name:'Team',id:'#Team'}, {name:'FAQs',id:'#'}, {name:'Contact',id:'#Contact'}];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" id='appbar'>
      <Container maxWidth="xl" disableGutters sx={{background: 'black', alignItems:'center'}}>
        <Toolbar disableGutters sx={{display: 'flex', justifyContent:'space-between', alignItems:'center',padding:'0px 50.625px'}}>

          <Box>
          <img src="images/UpdatedLogo.svg" alt="Navbar-Logo" width={144} height={24.21}/>
          </Box>

          
          <Box sx={{display:'flex'}}>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', alignItems:'center'} }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none'}
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{fontFamily: 'sans-serif', fontSize: 16, }}>{page.name}</Typography>
                </MenuItem>
              ))}
                <MenuItem>
                <Button variant='contained' sx={{background:'linear-gradient(to right, #d6b473 50%, #d6a254 50%);',backgroundPosition:'left bottom', backgroundSize:'200% 100%', transition:'all 0.5s ease', borderRadius:'40px', width:'163px', height:'50px', textTransform:'none', fontSize:'16px', ":hover":{
              bgcolor: '#d6a254', backgroundPosition:'right bottom', transition: 'all 0.5s ease', 
            }, color:'black'}}>Marketplace</Button>
                </MenuItem>
                <MenuItem>
                <Button variant='outlined' sx={{borderRadius:'40px', width:'163px', height:'50px', textTransform:'none', fontSize:'16px', border: '1px solid #d6b473;', color:'#d6b473;', ":hover":{border: '1px solid #d6b473;', color:'#d6b473;'} }} startIcon={<PersonIcon/>} >Login</Button>
                </MenuItem>
            </Menu>
          </Box>
          
          <Box sx={{display:'flex',gap:'20px'}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:'center',gap:'32px'}}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#FFFFFFCC', display: 'block', fontFamily: 'sans-serif', fontSize: 16, textTransform: 'none', ":hover":{cursor: 'none', color: '#d6b473'}}}
              >
                <a style={{all: 'unset'}} href={page.id}>{page.name}</a>
                
              </Button>
            ))}
          </Box>

          <Box sx={{display:{xs: 'none', md:'flex', gap:'10px',alignItems:'center'}}}>
            <Button variant='contained' sx={{background:'linear-gradient(to right, #d6b473 50%, #d6a254 50%);',backgroundPosition:'left bottom', backgroundSize:'200% 100%', transition:'all 0.5s ease', borderRadius:'40px', width:'163px', height:'50px', textTransform:'none', fontSize:'16px', ":hover":{
              bgcolor: '#d6a254', backgroundPosition:'right bottom', transition: 'all 0.5s ease', cursor: 'none'}, color:'black'}}>Marketplace</Button>
            <Button variant='outlined' sx={{borderRadius:'40px', width:'120px', height:'50px', textTransform:'none', fontSize:'16px', border: '1px solid #d6b473;', color:'#d6b473;', ":hover":{border: '1px solid #d6b473;', color:'#d6b473;',cursor: 'none'} }} startIcon={<PersonIcon/>} >Login</Button>

          </Box>
          </Box>
          

          </Box>
          

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
