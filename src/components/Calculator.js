import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@mui/material/styles';
import themes from "../themes/theme.js";
import logos from "../logos/logo.js";
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function Calculator() {
    const [provider, setProvider] = useState("");
    const [theme, setTheme] = useState(themes.normal);
    const [premium, setPremium] = useState();
    const [logo, setLogo] = useState(logos.s);

    const calculatePremium = () => {
        const premium = Math.ceil(Math.random() * 50);
        setPremium(premium.toFixed(2));

    };
    // const [logo, setLogo] = useState('logos.mc');
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

            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "70vh",
            }}>

                <AppBar style={{ height: '80px' }}
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
                        <img src= {logo} alt="logo" style={{ width: '150px' , height:'70px', padding:'2px'}}></img>
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
                        if (provider === '') {
                            setTheme(themes.normal)
                        }
                        if (provider === '3') {
                            setTheme(themes.lloyds) 
                        }
                    if(provider ==='3') {
                        setLogo(logos.lb)
                    }
                        if (provider === '1') {
                            setTheme(themes.widdows)
                        }
                        if(provider ==='1') {
                            setLogo(logos.s)
                        }
                        if (provider === '2') {
                            setTheme(themes.hallifax)
                        }

                        if(provider ==='2') {
                            setLogo(logos.ha)
                        }

                        calculatePremium();


                    }}> Submit


                </Button>

                <h3>£{premium}</h3>
                
            </div>
        </ThemeProvider>
    )
}

export default Calculator
