//IMPORTS//
import React from 'react'
import '../NavBar/NavBar.scss'
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
import Helvetica97 from "../../assets/Fonts/helvetica97-condensedblack-oblique.ttf"
import { Logo } from "./Logo";
import { CartWidget } from './CartWidget';
import {Link} from 'react-router-dom'









//COMPONENT NAVBAR

const pages = ['About Us', 'Hats', 'T-shirts','Hoods'];


export  function NavBar() {
    
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
   
   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
 


  return (
    <AppBar position="static" color='primary'>
      
      <Container maxWidth="xl">
        
        <Toolbar disableGutters>
      <Link to = "/">
      <Logo/>
      </Link>
          
          <Typography
           
            variant="h6"
            noWrap
            component="a"
            href="/"
            color ='secondary'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: {Helvetica97},
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
            }}
          >
          PALACE
          </Typography>

           

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" ><Link style ={{textDecoration: "none",color: "white"}}to = {`/${page}`}>{page} </Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Typography
            variant="h5"
            noWrap
            color='secondary'
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: {Helvetica97},
              fontWeight: 700,
              letterSpacing: '.2rem',
              textDecoration: 'none',
            }}
          >
          PALACE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
            {pages.map((page) => (
              
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              > <Link  style ={{textDecoration: "none", color: "white"}}to = {`/${page}`}>
                {page}
              </Link>
                
              </Button>
              
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          
          <CartWidget/>
        
         </Box>
        </Toolbar>
      </Container>
    </AppBar>
)



  
}
