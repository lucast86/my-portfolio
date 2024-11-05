import React from 'react'
import { Container, Typography, Box, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <Box 
        component="footer" 
        sx={{ 
            backgroundColor: '#172D82', 
            color: 'white',
            textAlign: 'center', 
            py: 1.5, 
            mt: 'auto', 
            width: '100%',
            position: 'relative', // Para evitar problemas de superposición
            bottom: 0, // En caso de que sea necesario forzarlo hacia abajo
        }}
    >
        <Container 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between', 
                alignItems: 'center' 
            }}
        >
            <Typography>© 2024 Lucas Portfolio</Typography>
            <Box
                sx={{
                    display: 'flex',
                    gap: 1, // Espaciado entre íconos
                    justifyContent: 'center',
                }}
            >
                <IconButton sx={{ color: 'white' }} href="https://github.com/lucast86" target="_blank">
                <GitHub />
                </IconButton>
                <IconButton sx={{ color: 'white' }} href="https://www.linkedin.com/in/lucastrento86/" target="_blank">
                <LinkedIn />
                </IconButton>
                <IconButton sx={{ color: 'white' }} href="mailto:lucastrento86@gmail.com">
                <Email />
                </IconButton>
                <IconButton sx={{ color: 'white' }} href="https://wa.me/542954310307">
                <WhatsAppIcon />
                </IconButton>
            </Box>
        </Container>
  </Box>
  )
}

export default Footer
