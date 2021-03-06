import "../styles/reset.css";
import "../styles/loadingIndicator.css";
import AppLayout from "../layout/appLayout";

function MyApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default MyApp;
