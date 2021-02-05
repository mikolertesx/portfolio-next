import defaultLayout from "./default";

const layouts = {
  default: defaultLayout,
};

const Wrapper = ({ children }) => {
  const childrenType = children.type;
  const childrenLayout = childrenType.layout || "default";
  if (layouts[childrenLayout]) {
    const Layout = layouts[childrenLayout];
    return <Layout>{children}</Layout>;
  }
  console.warn(`Layout ${childrenLayout} was not found. Try registering it.`);
  return <>{children}</>;
};

export default Wrapper;
