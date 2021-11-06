import React, { useState, useMemo } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import themes from "../themes/theme.js"


function Calculator() {
    const [ provider, setProvider]  = useState("");
    const theme = useMemo( () => { 
        console.log(provider)
        if(provider === ''){
            return themes.normal
        } 
        if(provider === '3'){
            return themes.lloyds
        } 
        if(provider === '1'){
            return themes.widdows
        } 
        if(provider === '2'){
            return themes.hallifax
        } 
     }, [provider] )
    // do this function when parameters in the array change

    return (
        <ThemeProvider theme={theme}>
        <div>
            
             <AppBar>hello</AppBar>
             <Select
                    value={provider}
                    label="Provider"
                    onChange={(e) => setProvider(e.target.value)}
                >
                    <MenuItem value={"3"}>Lloyds</MenuItem>
                    <MenuItem value={"2"}>Hallifax</MenuItem>
                    <MenuItem value={"1"}>Scottish Widdows</MenuItem>
                </Select>
                <Button
                    
                    onClick={() => {
                        

                    }}> hello

                    
                </Button>
        </div>
        </ThemeProvider>
    )
}

export default Calculator
