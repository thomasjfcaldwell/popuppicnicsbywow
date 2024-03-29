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
			'@media (max-width:768px)': {
				fontSize: '1.5rem',
			},
			color: '#FFF3E5',
		},
		h2: {
			fontSize: '20px',
			'@media (max-width:768px)': {
				fontSize: '1rem',
			},
			color: '#FFF3E5',
			fontWeight: '500',
		},
		h3: {
			fontFamily: 'Playfair Display SC, serif',
			fontSize: '40px',
			'@media (max-width:768px)': {
				fontSize: '1rem',
			},
			color: '#171923',
		},
		h4: {
			fontFamily: 'Montserrat, sans-serif',
			color: '#171923',
			lineHeight: '28px',
			fontSize: '20px',
		},
		p: {
			fontFamily: 'Montserrat, sans-serif',
			color: '#6C757D',
			lineHeight: '20px',
			fontSize: '14px',
		},
		pSmall: {
			fontFamily: 'Montserrat, sans-serif',
			fontSize: '10px',
			fontStyle: 'normal',
			fontWeight: '400',
			lineHeight: 'normal',
			color: '#ADB5BD',
		},
	},
});
