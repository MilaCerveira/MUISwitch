import { createTheme } from '@mui/material/styles';
const hallifax = createTheme({
	palette: {
		primary: {
			main: '#08235a',
			contrastText: '#ffffff'
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
			main: '#5a0819',
			contrastText: '#ffffff'
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
			main: '#6665',
			contrastText: '#ffffff'
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