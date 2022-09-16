import { createGlobalStyle, ThemeProvider } from "styled-components";
// Tema global aplicado com ThemeProvider accessível em todo o projeto
const theme = {
  colors: {
    white: "#fff",
    dark: "#303030",
    main: "#EB8FA9",
    mainLight: "#FFD7F0",
    bgDark: "rgb(53, 53, 53)",
    bgLight: "#f5f5f5",
  },
  fonts: {
    primary: "Source Sans Pro, sans-serif",
    secondary: "Roboto, sans-serif",
  },
  shadows: {
    main: "0.25em 0.25em 0.75em rgba(0,0,0,.25), 0.125em 0.125em 0.25em rgba(0,0,0,.15)",
  },
  margins: {
    main: "calc((100vw - 1000px)/2)",
  },
};
// Estilização global com styled-components
const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

*:focus {
  font-weight: 600;
  outline: 2px solid ${({ theme }) => theme.colors.main};
}
:root {
    height: 100%;
    scroll-behavior: smooth;
}

body {
    margin: 0;
    background: ${theme.colors.bgLight};
    color: ${theme.colors.dark};
    font-family: ${theme.fonts.secondary};
    height: 100%;
}

@media (min-width: 768px) {
    body {
        font-size: 1.2em;
    }
}

#root,
.App {
    height: 100%;
}
`;

export { GlobalStyle, ThemeProvider, theme };
