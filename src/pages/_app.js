import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {/*     <div className="slide_right slide  diActive"></div>
      <div className="slide_left slide diActive"></div> */}
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}

export default MyApp;
