//Styles & variables accessible to entire app
import "../public/sass/globals.scss";

import Layout from "../components/layout/layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
