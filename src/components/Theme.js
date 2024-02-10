import { createTheme } from '@mui/material/styles';

//todo : Create Custom Theme for ThemeProvider
export let theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Vazir, roboto"
    },
    breakpoints: {
        keys: [
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
            "xxl",
        ],
        values: {
            xs: 0,    //mobile 0-575
            sm: 576,  //tablet 576-767
            md: 768,  //laptop 768-991
            lg: 992,  //desktop 992-1999
            xl: 1200, //wide desktop 1200-1399
            xxl: 1400 //wider desktop more than 1400
        },
    },
    palette: {
        ochre: {
            main: '#E3D026',
            light: '#E9DB5D',
            dark: '#A29415',
            contrastText: '#242105',
        },
    },
})

theme = createTheme(theme, {
    palette: {
        salamon: theme.palette.augmentColor({
            color: {
                main: "#ff5733",
            },
            name: "salamon"
        }),
        farshid: theme.palette.augmentColor({
            color: {
                main:"#b2ebf2"
            },
            name:"farshid"
        })
    }
})