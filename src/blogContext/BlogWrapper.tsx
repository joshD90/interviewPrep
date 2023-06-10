import { FC, useState } from "react";
import BlogViewer from "./BlogViewer";
import BlogEditor from "./BlogEditor";
import BlogContextProvider from "./BlogContextProvider";

const BlogWrapper: FC = () => {
  const [blogNumber, setBlogNumber] = useState(0);

  return (
    <BlogContextProvider>
      <div>
        <p>Which Blog Would You Like To View?</p>
        <input
          type="number"
          onChange={(e) => setBlogNumber(parseInt(e.target.value))}
        />
      </div>
      <div className="blogWrapper">
        <BlogViewer blogIndex={blogNumber} />
        <BlogEditor blogIndex={blogNumber} />
      </div>
    </BlogContextProvider>
  );
};

export default BlogWrapper;
