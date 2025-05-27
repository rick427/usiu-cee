import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import App from './App.tsx';
import { primary, secondary } from "@/common/colors.ts";

const theme = createTheme({
  primaryColor: "primary",
  fontFamily: 'Inter, sans-serif',
  colors: {
    primary,
    secondary,
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
