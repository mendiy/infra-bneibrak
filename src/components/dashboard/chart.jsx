import { Doughnut } from 'react-chartjs-2';
import {Chart,ArcElement} from 'chart.js';
import { Box, Card, CardContent, CardHeader, Divider, Typography, Grid } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';

Chart.register(ArcElement)
export const ChartGraph = (props) => {
 

  const data = {
    datasets: [
      {
        data: [63, 15, 22],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['Projects Issues', 'Projects Done', 'Ongoing']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor:'#F6C927',
      bodyFontColor: '#F6C927',
      borderColor: '#F6C927',
      borderWidth: 1,
      enabled: true,
      footerFontColor: '#F6C927',
      intersect: false,
      mode: 'index',
      titleFontColor:'#E53935'
    }
  };

  const devices = [
    {
      title: 'Projects Issues',
      value: 63,
      icon: LaptopMacIcon,
      color: '#3F51B5'
    },
    {
      title: 'Projects Done',
      value: 15,
      icon: TabletIcon,
      color: '#E53935'
    },
    {
      title: 'Ongoing',
      value: 23,
      icon: PhoneIcon,
      color: '#FB8C00'
    }
  ];

  return (
    <Card  sx={{ height: '100%', background: '#21213E' , color: "#F6C927"}}{...props}>
      <CardHeader  title="Chart"  />
      <Divider />
      <CardContent >
        <Box
          sx={{
            height: 300,
            position: 'relative',
            background: "#21213E",  
          }}
        >
          <Doughnut  
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2,        
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="primary" />
              <Typography
                color="primary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
        
      </CardContent>
    </Card>
  );
};
