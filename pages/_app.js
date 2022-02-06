import Layout from '../component/Layout';
import '../styles/globals.css';
import store from "../Redux/store";
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }) {
  return(
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
  );
}

export default MyApp
