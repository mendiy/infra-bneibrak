import * as React from 'react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

export default function CircularColor() {
  return (
    <Box container style={{ background: '#21213E' }}>
      <Typography component="h1" variant="h3" color="#F6C927" sx={{ textAlign: 'center', alignItems: 'center' }}>
        loading...
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          '& > *': {
            margin: 'auto',
          },
        }}
      >
        <CircularProgress color="primary" />
      </Stack>
    </Box>
  );
}
