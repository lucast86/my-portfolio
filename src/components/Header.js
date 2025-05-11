import { AppBar, Toolbar, Typography, Button, Box, Slide, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  const menuItems = [
    { label: 'Sobre mí', to: 'about' },
    { label: 'Estudios', to: 'EducationAndCourses' },
    { label: 'Tecnologías', to: 'technologies' },
    { label: 'Proyectos', to: 'projects' },
    { label: 'Contacto', to: 'footer' },
  ];

  return (
    <>
      <Slide in={true} direction="down" appear={false}>
        <AppBar
          sx={{
            backgroundColor: scrolled ? '#172D82' : '#0E1E42',
            transition: 'background-color 0.3s',
            boxShadow: scrolled ? 2 : 'none',
          }}
        >
          <Toolbar>
            <Typography 
              variant="h6"
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              component={ScrollLink}
              to="home"
              smooth={true}
              duration={500}
            > 
              Portfolio
            </Typography>

            {/* Menú para pantallas grandes */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {menuItems.map((item) => (
                <Button
                  key={item.to}
                  color="inherit"
                  component={ScrollLink}
                  to={item.to}
                  smooth={true}
                  duration={500}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

            {/* Botón de hamburguesa para pantallas pequeñas */}
            <IconButton
              color="inherit"
              edge="end"
              sx={{ display: { xs: 'block', md: 'none' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Drawer para menú en pantallas pequeñas */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#0E1E42', // Fondo oscuro
            color: 'white', // Texto en blanco
            width: 250,
            height: 'auto', // Ajuste de altura automática
          },
        }}
      >
        {/* Botón de cierre con flecha hacia la izquierda */}
        <Box display="flex" justifyContent="flex-start" p={2}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>

        <List>
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={item.to}
              sx={{
                borderBottom: '1px solid white', // Línea blanca inferior
                '&:last-child': { borderBottom: 'none' }, // Quitar borde del último elemento
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  component: ScrollLink,
                  to: item.to,
                  smooth: true,
                  duration: 500,
                  style: { cursor: 'pointer', color: 'white' },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;