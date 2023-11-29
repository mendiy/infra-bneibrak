import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';
import { createTheme } from '@mui/system';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '26px',
    marginRight: '2.7vw',
    marginLeft: '2.7%',
    height: '65px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 16px',
    backgroundColor: '#121231',
    color: 'white',
    borderRadius: '10px',
    zIndex: 1000,
    [theme.breakpoints.down('sm')]: {
      '& .bell-icon': {
        display: 'none',
      },
      '& .user-name, & .user-title': {
        display: 'none',
      },
      justifyContent: 'flex-end',
      width: '120px'
    },
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: '49px',
    height: '49px',
    flexShrink: '0',
  },
  userName: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontStyle: 'normal',
    lineHeight: 'normal',
    fontWeight: '700',
  },
  userTitle: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: '13px',
    fontStyle: 'normal',
    lineHeight: 'normal',
  },
  iconButton: {
    width: '45px',
    height: '45px',
    background: '#21213E',
    margin: '10px',
  },
}));

const UserMenu = () => {
  const classes = useStyles();
  const navigateTo = useNavigate();

  const handleMoreIconClick = () => {
    navigateTo('/currentProfile');
  };

  const [profileData, setProfileData] = useState({});
  const [firstLetter, setFirstLetter] = useState('U');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/me');

        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const { firstName, lastName, title } = response.data.result;
        setProfileData({ firstName, lastName, title });
        setFirstLetter(firstName[0]);
      } catch (error) {
        console.error('Error fetching profile data:', error);
        setError('Error fetching profile data. Please try again later.');
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.userInfo}>
        <Avatar className={classes.avatar}>{firstLetter}</Avatar>
        <div style={{ marginLeft: '12px' }}>
          <div className={`user-name ${classes.userName}`}>
            {profileData.firstName + ' ' + profileData.lastName}
          </div>
          <div className={`user-title ${classes.userTitle}`}>
            {profileData.title}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color="inherit" className={`bell-icon ${classes.iconButton}`}>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          className={classes.iconButton}
          onClick={handleMoreIconClick}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserMenu;