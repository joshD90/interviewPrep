import { useContext, FC } from "react";
import { BlogContext } from "./BlogContextProvider";

type Props = { blogIndex: number };

const BlogViewer: FC<Props> = ({ blogIndex }) => {
  const blogContext = useContext(BlogContext);
  if (!blogContext) return null;

  const [blogs] = blogContext;

  return (
    <section className="blogContainer">
      <div>
        <h1>{blogs[blogIndex]?.title}</h1>
        <p>{blogs[blogIndex]?.body}</p>
      </div>
    </section>
  );
};

export default BlogViewer;
