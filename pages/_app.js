import "../styles/globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Script
        async
        defer
        data-website-id="14dc6d24-94c8-4de7-80e4-e34df1a2c5d6"
        src="https://micin.imam.dev/micin.js"
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
