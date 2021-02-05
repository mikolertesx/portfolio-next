import "../styles/globals.css";
import Wrapper from "../layouts/wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Component {...pageProps} />
    </Wrapper>
  );
}

export default MyApp;
