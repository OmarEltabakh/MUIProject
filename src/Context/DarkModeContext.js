import { createContext, useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";

export let darkModeCotext = createContext();

export default function DarkModeContextProvider(props) {



    const [mode, setMyMode] = useState(localStorage.getItem("currentMode")===null? "light":localStorage.getItem("currentMode"));

    const darkTheme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
              ? {
                  // palette values for light mode
                  myColor: {
                    main: cyan[900],
                    
                  },

                  gray: {
                    main: grey[300],
                    
                  },
                
                }
              : {
                  // palette values for dark mode
                  myColor: {
                    main: cyan[200],
                  },

                  gray: {
                    main: grey[800],
                    
                  },
              
                }),
          },
          breakpoints: {
            values: {
              xs: 0,
              sm: 600,
              md: 900,
              lg: 1200,
              xl: 1536,
            }
          }

    });

   
   
   return <>

        <ThemeProvider theme={darkTheme}>{/*  المشروع بتاعك لازم يكون كله بداخل الthemeProvider*/}
            <CssBaseline />
            <darkModeCotext.Provider value={{setMyMode}}>

                {props.children}

            </darkModeCotext.Provider>

        </ThemeProvider>
    </>


}