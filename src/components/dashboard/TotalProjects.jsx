import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SourceIcon from '@mui/icons-material/Source';

export const TotalProjects = (props) => (
  <Card
    sx={{ height: '100%' , background: '#21213E'}}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
      <Grid item>
          <Avatar
            sx={{
            bgcolor: "#F6C927" ,
            height: 50,
            width: 50,
            }}
          >
            <SourceIcon  />
          </Avatar>
        </Grid>
        <Grid item>
          <Typography
           
            gutterBottom
            variant="overline"
            sx={{
            fontSize:10,
            }}

          >
            Total Projects
          </Typography>
          <Typography
            variant="h4"
          >
           15
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* <ArrowDownwardIcon color="error" /> */}
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          
        </Typography>
        <Typography
        
          variant="caption"
        >
         
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
