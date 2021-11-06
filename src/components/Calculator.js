import React, { useState} from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import themes from "../themes/theme.js";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Calculator() {
    const [ provider, setProvider]  = useState("");
    const [ theme, setTheme]  = useState(themes.normal);
    // const theme = useMemo( () => { 
 
    //     // if(provider === ''){
    //     //     return themes.normal
    //     // } 
    //     // if(provider === '3'){
    //     //     return themes.lloyds
    //     // } 
    //     // if(provider === '1'){
    //     //     return themes.widdows
    //     // } 
    //     // if(provider === '2'){
    //     //     return themes.hallifax
    //     // } 
    //  }, [provider] )
    // do this function when parameters in the array change

    return (
        <ThemeProvider theme={theme}>
        <div>
            
             <AppBar style={{ height: '64px' }}
             >
             <Toolbar>
          
             <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
               <MenuIcon />
               </IconButton>
          </Toolbar>
             </AppBar>

             <Select
                    value={provider}
                    label="Provider"
                    onChange={(e) => setProvider(e.target.value)}
                >
                    <MenuItem value={"3"}>Lloyds</MenuItem>
                    <MenuItem value={"2"}>Hallifax</MenuItem>
                    <MenuItem value={"1"}>Scottish Widdows</MenuItem>
                </Select>
                <Button variant="contained" color="secondary" size="medium"
                    
                    onClick={() => {
                        if(provider === ''){
                            setTheme(themes.normal) 
                        } 
                        if(provider === '3'){
                            setTheme(themes.lloyds)
                        } 
                        if(provider === '1'){
                            setTheme(themes.widdows)
                        } 
                        if(provider === '2'){
                            setTheme(themes.hallifax)
                        } 

                        

                    }}> Submit

                    
                </Button>

  
        </div>
        </ThemeProvider>
    )
}

export default Calculator
