import axios from "axios";
import { withRouter } from "next/router";

const PortfolioDetail = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  try {
    const postData = await axios.get(
      `http://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    const post = postData.data;
    return { post };
  } catch (e) {
    console.error(e);
  }
};

export default withRouter(PortfolioDetail);
