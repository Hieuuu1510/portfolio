import "@/styles/globals.css";
import "@/libs/assets/scss/main.scss";
import NavBar from "@/libs/navbar";

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
