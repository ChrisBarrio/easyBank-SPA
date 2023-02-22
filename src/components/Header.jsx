import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from '@/components/icons/Logo';
import BtnLogin from '@/components/BtnLogin';
import LoginUser from '@/components/LoginUser';

const drawerWidth = 260;

const navItems = [
  { page: 'Home', path: '/' },
  { page: 'About', path: '/about' },
  { page: 'Contact', path: '/contact' },
  { page: 'Blog', path: '/blog' },
  { page: 'Careers', path: '/careers' },
];

const Header = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // navbar open
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 3 }}>
        <Link to="/">
          <Logo fill="#2d314d" />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
              <Link
                to={item.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {item.page}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button onClick={handleModalOpen}>
        <BtnLogin />
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: '#fff' }}>
        <Toolbar>
          <Button
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: '#000', mr: 2, display: { sm: 'none' } }}
          >
            <GiHamburgerMenu />
          </Button>
          <Box component="div" sx={{ display: { xs: 'flex', sm: 'flex' } }}>
            <Logo fill="#2d314d" />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, mx: 'auto' }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: '#647E68',
                  fontWeight: 500,
                  mx: 2,
                  textTransform: 'capitalize',
                }}
              >
                <Link
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  to={item.path}
                >
                  {item.page}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button onClick={handleModalOpen}>
              <BtnLogin />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <LoginUser
        open={open}
        setOpen={setOpen}
        handleModalClose={handleModalClose}
      />
    </Box>
  );
};

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
