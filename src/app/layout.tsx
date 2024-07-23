import Image from "next/image";
import "./global.css";
import Header from "@/components/Header";
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>SznycLOL</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="icon"
          href="../../public/sznyc_lol_logo.png"
          type="image/png"
        />
        <link
          rel="shortcut icon"
          href="../../public/sznyc_lol_logo.png"
          type="image/png"
        />
      </head>
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
