import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#F78F1E',
			light: '#FFF3E5',
		},
	},
	typography: {
		h1: {
			fontFamily: 'Playfair Display SC, serif',
			fontSize: '65px',
			color: '#FFF3E5',
		},
		h2: {
			fontSize: '20px',
			color: '#FFF3E5',
			fontWeight: '500',
		},
		h3: {
			fontFamily: 'Playfair Display SC, serif',
			fontSize: '65px',
			color: '#171923',
		},
		p: {
			fontFamily: 'Montserrat, sans-serif',
			color: '#6C757D',
		},
	},
});
