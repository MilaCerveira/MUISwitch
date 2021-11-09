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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';






function Calculator() {
    const [provider, setProvider] = useState("");
    const [theme, setTheme] = useState(themes.normal);
    const [premium, setPremium] = useState();
    const [logo, setLogo] = useState(logos.wo);
    const [firstName, setfirstName] = useState("Hello");
    const [cover, setCover] = useState();
    const [lastName, setlastName] = useState("");
    const [showMessage, setShowMessage] = useState(false);
   
    
   

    


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

                <AppBar style={{ height: '90px' }}
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
                        <img src={logo} alt="logo" style={{ width: '120px', height: '100%', Padding: "2px" }}></img>
                    </Toolbar>
                </AppBar>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch', maxWidth: '20ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        label="Enter your first name"
                        variant="outlined"
                        type="string"
                        onChange={(e) => setfirstName(e.target.value)}
                    />

                    <TextField
                        label="Enter your Surname"
                        variant="outlined"
                        type="string"
                        onChange={(e) => setlastName(e.target.value)}
                    />
                    <br />
                    <FormControl sx={{ m: 1, minWidth: 180 }}>
                        <InputLabel>Provider</InputLabel>
                        <Select
                            value={provider}
                            label="Provider"
                            onChange={(e) => setProvider(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"3"}>Lloyds</MenuItem>
                            <MenuItem value={"2"}>Hallifax</MenuItem>
                            <MenuItem value={"1"}>Scottish Widdows</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel>Choose Cover</InputLabel>
                    <Slider
                        size="small"
                        defaultValue={50000}
                        aria-label="Small"
                        step={50000}
                        marks
                        min={100000}
                        max={250000}
                        valueLabelDisplay="auto"
                        onChange={(e) => setCover(e.target.value)}
                    />


                    <Button variant="contained" color="secondary" size="medium"

                        onClick={() => {
                            if (provider === '') {
                                setTheme(themes.normal)
                            }
                            if (provider === '3') {
                                setTheme(themes.lloyds)
                            }
                            if (provider === '3') {
                                setLogo(logos.lb)
                            }
                            if (provider === '1') {
                                setTheme(themes.widdows)
                            }
                            if (provider === '1') {
                                setLogo(logos.s)
                            }
                            if (provider === '2') {
                                setTheme(themes.hallifax)
                            }

                            if (provider === '2') {
                                setLogo(logos.ha)
                            }
                            if (provider === '') {
                                setLogo(logos.wo)
                            }

                            calculatePremium();
                            
                            setShowMessage(!showMessage)
                            
                            
                        }}> Submit


</Button>

{showMessage && <h4> {firstName.charAt(0).toUpperCase() + firstName.slice(1)}  {lastName.charAt(0).toUpperCase() + firstName.slice(1)}  your premium from {provider} is £{premium} based on cover {cover} </h4>}
</Box>

</div>


</ThemeProvider>
)
}

export default Calculator