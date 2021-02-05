import Header from "../components/shared/Header";

const BaseLayout = ({ children, ...props }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
