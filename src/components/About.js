import React from 'react'
import { Typography, Container, Box } from '@mui/material';
import image from '../../src/assets/images/aboutBackgroundjpg.jpg' // importamos la image y en la llinea 140 la usamos

const About = () => {
  return (
        <Box
            sx={{
            height: '100vh', // Ocupa toda la altura de la pantalla
            backgroundImage: `url(${image})`, // Ruta de la imagen de fondo
            backgroundSize: 'cover', // La imagen cubrirá todo el contenedor
            backgroundPosition: 'center', // Centrar la imagen
            backgroundRepeat: 'no-repeat', // Evitar que la imagen se repita
            display: 'flex', // Para centrar el contenido dentro de la sección
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff', // Color de texto blanco para contrastar con la imagen
            textAlign: 'center',
        }}
        >
            <Container>
                <Typography variant="h3" gutterBottom>
                    ¡Hola! Soy Lucas Trento
                </Typography>
                <Typography variant="h6" color="inherit">
                Soy Técnico en Desarrollo de Software y desarrollador Full Stack.
                Conmigo obtendrás un programador con ganas de aprender siempre nuevas tecnologías y de adaptarse fácilmente a diferentes equipos de trabajo, con responsabilidad y dedicación.
                </Typography>
            </Container>
        </Box>    
  )
}

export default About
