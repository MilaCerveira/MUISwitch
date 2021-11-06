import React from 'react'
import Select from "@material-ui/core/Select";
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@material-ui/core/AppBar';


function Calc() {
    return (
        <div>
            <AppBar></AppBar>
           <Select
                    value={provider}
                    label="Provider"
                    onChange={(e) => setProvider(e.target.value)}
                >
                    <MenuItem value={"Lloyds"}>Lloyds</MenuItem>
                    <MenuItem value={"Hallifax"}>Hallifax</MenuItem>
                    <MenuItem value={"Scottish Widows"}>Scottish Widows</MenuItem>
                </Select>  
        </div>
    )
}

export default Calc

