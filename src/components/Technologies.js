import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import logoJS from '../assets/logos/javascript-1.svg'
import logoAxios from '../assets/logos/axios.svg'
import logoC from '../assets/logos/c-1.svg'
import logoCSS from '../assets/logos/css-3.svg'
import logoDocker from '../assets/logos/docker.svg'
import logoExp from '../assets/logos/express-109.svg'
import logoHTML from '../assets/logos/html-1.svg'
import logoMySQL from '../assets/logos/mysql-3.svg'
import logoReact from '../assets/logos/react-2.svg'
// Datos de tecnologías con sus logos
const techData = [
  { name: 'HTML', logo: logoHTML },
  { name: 'CSS', logo: logoCSS },
  { name: 'Javascript', logo: logoJS },
  { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  { name: 'Material UI', logo: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' },
  { name: 'C', logo: logoC },
  { name: 'dOCKER', logo: logoDocker },
  { name: 'React', logo: logoReact },
  { name: 'MySQL', logo: logoMySQL },
  { name: 'Expres', logo: logoExp },
  { name: 'Axios', logo: logoAxios },
  { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
];

const Technologies = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        padding: '40px 16px',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{m: 8,  textShadow: '0.5px 0.5px 1px #172D82'}}>
        Tecnologías que Manejo
      </Typography>

      <Grid 
        container 
        spacing={{ xs: 1, sm: 3, md: 4 }} 
        justifyContent="center"
      >
        {techData.map((e) => (
          <Grid item xs={6} sm={3} md={1.5} key={e.name}>
            <Paper 
              elevation={3} 
              sx={{
                padding: '10px',
                textAlign: 'center',
                height: '160px', // Tamaño consistente
                width: '160px',  // Hacerlo circular
                borderRadius: '50%', // Hacer el Paper redondo
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
            >
              <Avatar
                alt={e.name}
                src={e.logo}
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: '10%',
                  marginBottom: '10px', // Espacio entre el logo y el texto
                }}
              />
              <Typography variant="h6">{e.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technologies;