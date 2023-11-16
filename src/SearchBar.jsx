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
      }}
    >
      <Paper
        style={{
          backgroundColor: "#121231",
          marginLeft: "0.898%",
          position: "fixed",
          width: "23.42%",
          flexShrink: "0",
        }}
      >
        <IconButton>
          <SearchIcon style={{ color: "#fff" }} />
        </IconButton>
        <InputBase
          placeholder="Search"
          inputProps={{
            style: { color: "#fff", minWidth: "100px", maxWidth: "150px" },
          }}
        />
      </Paper>
    </div>
  );
};
export default SearchBar;
