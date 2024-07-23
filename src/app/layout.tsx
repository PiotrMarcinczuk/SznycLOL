// app/layout.tsx or app/layout.js (depending on your setup)
import "./global.css";
import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>SznycLOL</title>
        <meta
          name="description"
          content="Welcome to the home page of my site."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link rel="icon" href="/sznyc_lol_logo.png" type="image/png" />
        <link rel="shortcut icon" href="/sznyc_lol_logo.png" type="image/png" />
      </Head>
      <body>
        <Header initialNickname="" initialTag="" />
        {children}
        <footer>
          <p>
            <a href="https://github.com/PiotrMarcinczuk">
              <Image
                src="/github-mark.png"
                alt="GitHub Logo"
                width={20}
                height={20}
              />
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
