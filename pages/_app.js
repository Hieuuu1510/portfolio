import "@/styles/globals.css";
import "@/libs/src/assets/scss/main.scss";
import NavBar from "@/libs/src/navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
