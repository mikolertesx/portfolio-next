import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/portfolios">
        <a>Portfolio</a>
      </Link>
      <Link href="/blogs">
        <a>Blogs</a>
      </Link>
      <Link href="/cv">
        <a>Curriculum</a>
      </Link>
    </>
  );
};

export default Header;
