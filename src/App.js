import Calculator from "./components/Calculator";
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider >
    <div className="App">
      
     
     <Calculator/> 

      
    </div>
    </ThemeProvider>
  );
}

export default App;
