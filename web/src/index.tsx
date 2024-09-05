import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TodoApp from "./TodoApp";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TodoApp />
    </ThemeProvider>
  </React.StrictMode>
);
