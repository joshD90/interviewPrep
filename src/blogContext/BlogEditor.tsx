import { useContext, FC } from "react";
import { BlogContext } from "./BlogContextProvider";
import "./blogStyles.css";

type Props = { blogIndex: number };

const BlogEditor: FC<Props> = ({ blogIndex }) => {
  const blogContext = useContext(BlogContext);
  if (!blogContext) return null;

  const [blogs, setBlogs] = blogContext;

  const handleSubmit = () => {
    console.log("submitting");
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const fieldName = e.target.id;
    const fieldValue = e.target.value;
    setBlogs((prev) => {
      const updatedBlog = prev.map((blog, index) => {
        if (blogIndex !== index) return blog;
        return { ...blog, [fieldName]: fieldValue };
      });
      return updatedBlog;
    });
  };
  return (
    <section className="blogContainer">
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="title">Blog Title</label>
          <input
            type="text"
            id="title"
            onChange={handleChange}
            value={blogs[blogIndex]?.title || ""}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="body">Blog Body</label>
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={10}
            onChange={handleChange}
            value={blogs[blogIndex]?.body || ""}
          ></textarea>
        </div>
      </form>
    </section>
  );
};

export default BlogEditor;
