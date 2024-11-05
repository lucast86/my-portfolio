import { AppBar, Toolbar, Typography, Button, Box, Slide } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll'; // Importamos react-scroll } from 'react-scroll';
import { useState, useEffect } from 'react';

const Header = () => {
    
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <Box>
                    <Button 
                        color="inherit"
                        component={ScrollLink}
                        to="about"
                        smooth={true}
                        duration={500}
                    >
                        Sobre mí
                    </Button>
                    <Button 
                        color="inherit"
                        component={ScrollLink}
                        to="EducationAndCourses"
                        smooth={true}
                        duration={500}
                    >
                        Estudios
                    </Button>
                    <Button 
                        color="inherit"
                        component={ScrollLink}
                        to="technologies"
                        smooth={true}
                        duration={500}
                    >
                        Tecnologias
                    </Button>
                    <Button 
                        color="inherit"
                        component={ScrollLink}
                        to="projects"
                        smooth={true}
                        duration={500}
                    >
                        Proyectos
                    </Button>
                    <Button 
                        color="inherit"
                        component={ScrollLink}
                        to="footer"
                        smooth={true}
                        duration={500}
                    >
                        Contacto
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        </Slide>
    </>
  )
}

export default Header
