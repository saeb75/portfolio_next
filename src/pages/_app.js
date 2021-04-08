import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="slide_right slide  diActive"></div>
      <div className="slide_left slide diActive"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
