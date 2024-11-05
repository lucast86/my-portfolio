import { Box, Typography, Grid, Paper } from '@mui/material';

// Datos de carreras
const degrees = [
    { 
        title: 'Técnico Superior en Desarrollo de Software', 
        institution: 'ITES', 
        year: '2020',
        url: 'https://ites.edu.ar/carrera_desarrollo' 
    },
    { 
        title: 'Diplomatura en Desallorro Web Full Stack', 
        institution: 'Academia Numen', 
        year: '2022',
        url: 'https://www.academianumen.com.ar/fullstack'
    },
];

// // Datos de cursos
// const courses = [
//   { name: 'Curso de React Avanzado', platform: 'Platzi', year: '2023' },
//   { name: 'Backend con Node.js', platform: 'Udemy', year: '2022' },
//   { name: 'Diseño UI/UX', platform: 'Coursera', year: '2021' },
// ];

const EducationAndCourses = () => {
  return (
        <Box
            sx={{
                padding: '40px 16px',
                backgroundColor: '#f5f5f5',
            }}
        >
        {/* Título de la sección */}
            <Typography variant="h4" align="center" gutterBottom sx={{m: 8,textShadow: '0.5px 0.5px 1px #172D82'}}>
                Carrera y Cursos
            </Typography>

            {/* Sección de Carreras */}
            <Box sx={{ marginBottom: '20px' }}>
                <Grid container spacing={3} justifyContent="center">
                {degrees.map((degree, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            padding: '20px', 
                            borderRadius: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center', 
                            boxShadow: '0px 4px 8px #172D82', // Sombra personalizada en azul
                            transition: 'box-shadow 0.3s ease-in-out', // Animación de la sombra
                            '&:hover': {
                                boxShadow: '0px 6px 12px #0055CC', // Sombra más intensa al hacer hover
                            },
                        }}
                        onClick={() => {
                            const newWindow = window.open(degree.url, '_blank', 'noopener,noreferrer');
                            if (newWindow) newWindow.opener = null; // Evita problemas de seguridad
                        }} 
                    >
                        <Typography variant="h6">{degree.title}</Typography>
                        <Typography variant="body2" color="textSecondary">
                        {degree.institution} - {degree.year}
                        </Typography>
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Box>

            {/* Sección de Cursos */}
            {/* <Box>
                <Typography variant="h5" gutterBottom>
                Cursos Realizados
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                {courses.map((course, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper elevation={3} sx={{ padding: '20px', borderRadius: '16px' }}>
                        <Typography variant="h6">{course.name}</Typography>
                        <Typography variant="body2" color="textSecondary">
                        {course.platform} - {course.year}
                        </Typography>
                    </Paper>
                    </Grid>
                ))}
                </Grid>
            </Box> */}
        </Box>
    );
};

export default EducationAndCourses;
