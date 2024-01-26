import Footer from "@/Shared/Footer";
import Header from "@/Shared/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
