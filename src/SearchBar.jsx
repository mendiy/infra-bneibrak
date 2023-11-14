import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import react from "react";

export default function SearchBar(){
    return (
    <div style={{ flexGrow: 1, 
        position: 'fixed',
      top: '37px',
      right: '24.33%',
      left: '52.11%',
      width: '23.408%',
      height: '53px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      color: '#121231',
      borderRadius: '10px',
    
     }}>
    <Paper style={{ backgroundColor: '#121231', marginLeft: '0.898%' }}>
        <InputBase 
        placeholder="Search"
          inputProps={{ style: { color: '#fff'} }}
           />
           <IconButton>
        <SearchIcon style={{color: "#fff", Width: '18px', Height: '18px', Top: '54px', marginRight: '1.993%' }} />
        </IconButton>

    </Paper>
    </div>
    )
}