import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles'



const theme = createTheme({
             
              palette: {


                primary: {
                  
                     main: '#212121' 
                },
                secondary: {
                    
                   main: '#ffc107'

                },



              }
              
                      


})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <ThemeProvider theme = {theme}>
   <App />
   </ThemeProvider>
    
  </React.StrictMode>
);



