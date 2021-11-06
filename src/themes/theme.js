import { createTheme } from '@mui/material/styles';
const hallifax = createTheme({
	palette: {
		primary: {
			main: '#08235a',
			contrastText: '#ffffff'
		},
        secondary:{
            main: '#1385a3',
            
        },
		background: {
			default: '#ffffff'
		},
		text: {
			primary: '#000000'
		}
	}
});

const lloyds = createTheme({
	palette: {
		primary: {
			main: '#135a08',
			contrastText: '#ffffff'
		},
        secondary:{
            main: '#13a32f',
            
        },
		background: {
			default: '#ffffff'
		},
		text: {
			primary: '#000000'
		}
	}
});

const widdows = createTheme({
	palette: {
		primary: {
			main: '#A30000', 
			contrastText: '#ffffff'
		},
        secondary:{
            main: '#93032E'
        },
		background: {
			default: '#ffffff'
		},
		text: {
			primary: '#000000'
		}
	}
});

const normal = createTheme({
	palette: {
		primary: { 
			main: '#340357',
			contrastText: '#ffffff'
		},
        secondary:{
            main: '#6665'
        },
		background: {
			default: '#000000'
		},
		text: {
			primary: '#000000'
		}
	}
});

const themes = { normal, lloyds, hallifax, widdows}
export default themes