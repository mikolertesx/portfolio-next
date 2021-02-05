import axios from "axios";
import Link from "next/link";

const Portfolios = ({ posts }) => {
  return (
    <>
      <h1>Portfolio page</h1>
      <Link href="/portfolios/4">
        <a>Go to a weird place</a>
      </Link>
    </>
  );
};

export default Portfolios;
