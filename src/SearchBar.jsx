import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import react from "react";

const SearchBar = () => {
  return (
    <div
      style={{
        position: "sticky",
        marginTop: "37px",
        maxWidth: "100%",
        height: "53px",
        color: "#121231",
        borderRadius: "10px",
        zIndex: 1000, // Set a higher z-index to ensure it appears above other elements
      }}
    >
      <Paper
        style={{
          backgroundColor: "#121231",
          marginLeft: "0.898%",
          position: "fixed",
          width: "calc(23.42% - 2px)", // Adjusted width to consider the border
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton>
          <SearchIcon style={{ color: "#fff" }} />
        </IconButton>
        <InputBase
          placeholder="Search"
          inputProps={{
            style: { color: "#fff", minWidth: "60px", maxWidth: "100%" },
          }}
          style={{
            flex: 1, // Allow the input to grow and take up remaining space
            marginLeft: "8px", // Add some space between icon and input
          }}
        />
      </Paper>
    </div>
  );
};
export default SearchBar;
