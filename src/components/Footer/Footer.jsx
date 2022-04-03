import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: 'center' }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/fabrinanunes">
        <GitHubIcon />
        Fabrina Nunes
      </Link>
    </Typography>
  );
}

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '5rem',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 2.5,
          px: 2,
          mt: 'auto',
          backgroundColor: '#3e80bdea',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Pokedex created using PokeApi, React e Material UI
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
