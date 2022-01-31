import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import store from "../redux/store";
import {Provider} from "react-redux";

function MyApp({Component, pageProps}) {
  const root = (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
  return root;
}
export default MyApp;
