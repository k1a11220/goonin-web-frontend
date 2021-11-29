import AppLayout from "../components/navigation/AppLayout";
import "../styles/reset.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
