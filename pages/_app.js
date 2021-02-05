import "../styles/globals.scss";
import Wrapper from "../layouts/wrapper";

const App = ({ Component, pageProps }) => {
  return (
    <Wrapper>
      <Component {...pageProps}/>
    </Wrapper>
  );
};

export default App;
