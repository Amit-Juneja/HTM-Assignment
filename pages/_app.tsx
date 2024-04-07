import '@/styles/globals.css';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import type { AppProps } from 'next/app';
import { desktopTheme, mobileTheme } from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  const isDesktop = useMediaQuery(desktopTheme.breakpoints.up('md'));
  return (
    <>
      <ThemeProvider theme={isDesktop ? desktopTheme : mobileTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
