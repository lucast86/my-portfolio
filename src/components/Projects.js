import React from 'react'
import { useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, Collapse } from '@mui/material';
import imageBeer from '../../src/assets/images/numerBeer.jpg'
import imageMutual from '../../src/assets/images/mutual.png'
import imageItati from '../../src/assets/images/itati.png'

const projects = [
    { 
        title: 'Administración Mutual',
        simpleDescription: 'Sistema de gestión de préstamos.', 
        extensiveDescription: 'Sistema de gestión de préstamos en que realizamos alta y baja de los mismos, con todo lo relacionado a las líneas y tasas culminando con la cobranza y contabilidad',
        url: '',
        img: imageMutual 
    },
    { 
        title: 'Numer Beer', 
        simpleDescription: 'Tienda online Venta de Cerveza.',
        extensiveDescription: 'Tienda en la que ofrecemos nuestros productros realizados artesanalmente en una empresa familiar, con sabores unicos e irrepetibles', 
        url: 'https://numenbeer.netlify.app/',
        img: imageBeer 
    },
    { 
        title: 'Itati Artesanias', 
        simpleDescription: 'Tejidos e hilados.', 
        extensiveDescription: 'En Itatí, encontrás piezas únicas, realizadas en todo tipo de lana o hilo.',
        url: 'https://itatiartesania.netlify.app/',
        img: imageItati 
    },
];

const Projects = () => {
  // Estado local para controlar el despliegue de cada proyecto
  const [expanded, setExpanded] = useState({});

  // Función para alternar el despliegue de cada proyecto
  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index], // Cambia el estado actual del proyecto
    }));
  };

  return (
        <Box
            sx={{
                backgroundColor: '#f5f5f5',
                padding: '40px 16px' ,
            }}
        >
            <Typography variant="h4" align="center" gutterBottom sx={{m: 8, textShadow: '0.5px 0.5px 1px #172D82'}}>
                Mis Proyectos
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                {projects.map((project, index) => (
                <Grid item xs={11} md={3.5} key={index}>
                    <Card
                        sx={{
                            boxShadow: '0px 4px 8px #172D82', // Sombra personalizada en azul
                            transition: 'box-shadow 0.3s ease-in-out', // Animación de la sombra
                            '&:hover': {
                            boxShadow: '0px 6px 12px #0055CC', // Sombra más intensa al hacer hover
                        }}}
                    >
                    <CardMedia component="img" height="240" image={project.img} />
                    <CardContent>
                        <Typography variant="h5">{project.title}</Typography>
                        <Typography>{project.simpleDescription}</Typography>
                        {/* Botón para alternar más detalles */}
                        <Button 
                        size="small" 
                        onClick={() => toggleExpand(index)} 
                        sx={{ mt: 2 }}
                        >
                        {expanded[index] ? 'Ver menos' : 'Ver más'}
                        </Button>

                        {/* Información adicional en Collapse */}
                        <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                        <Typography sx={{ mt: 2 }}>{project.extensiveDescription}</Typography>
                        <Button 
                            href={project.url} 
                            target="_blank" 
                            rel="noopener" 
                            size="small" 
                            sx={{ mt: 1 }}
                        >
                            Ir al Proyecto
                        </Button>
                        </Collapse>
                    </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        </Box>
    );
    };

export default Projects