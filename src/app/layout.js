import "./globals.css";
import Head from "next/head";
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}