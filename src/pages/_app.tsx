import "../styles/globals.css";
import "../styles/main.css";
import "../styles/util.css";
import type { AppProps } from "next/app";
import { Amiri } from "next/font/google";
const amiri = Amiri({ subsets: ["arabic"], style: "normal", weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={amiri.className}>
      <Component {...pageProps} />
    </main>
  );
}
