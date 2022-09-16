import { Route, Routes } from "react-router-dom";
import { GlobalStyle, ThemeProvider, theme } from "./GlobalStyle";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import StoreDetails from "./pages/StoreDetails";
// Componente React principal
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {/* Rotas da aplicação */}
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stores/:id" element={<StoreDetails />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
