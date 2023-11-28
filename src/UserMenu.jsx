// UserMenu.jsx
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useNavigate } from "react-router-dom";
import { response } from "express";

const UserMenu = () => {
  const navigateTo = useNavigate();
  const [details, setDetails] = useState({})

  const fetchProfileData = async () => {
    const response = await axios.get("http://localhost:5000/api/users/me");
    const {firstName, lastName, email } = response.data.result;
    setDetails({firstName, lastName, email });
  };

  const handleMoreIconClick = () => {
    // Navigate to '/profileUpdate' when the 'MoreVertIcon' is clicked
    navigateTo("/currentProfile");
  };

  return (
    <div
      style={{
        marginTop: "26px",
        maxWidth: "19%%",
        minWidth: "200px",
        marginRight: "2.7%",
        marginLeft: "2.7%",
        height: "65px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 16px",
        backgroundColor: "#121231",
        color: "white",
        borderRadius: "10px",
        zIndex: 1000, // Ensure it's above other elements
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* User photo */}
        <Avatar
          style={{ width: "49px", height: "49px", flexShrink: "0" }}
          alt="User Photo"
          src="/path/to/user-photo.jpg"
        />
        {/* User name and title */}
        <div style={{ marginLeft: "12px" }}>
          <div
            style={{
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: "13px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
          details.firstName ? {details.firstName+" "+ details.lastName} : username 
          </div>
          <div
            style={{
              color: "#FFF",
              fontFamily: "Roboto",
              fontSize: "10px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Title
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <IconButton
          color="inherit"
          style={{
            width: "45px",
            height: "45px",
            background: "#21213E",
            margin: "10px",
          }}
        >
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          style={{
            width: "45px",
            height: "45px",
            background: "#21213E",
            position: "sticky",
          }}
          onClick={handleMoreIconClick}
        >
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default UserMenu;
